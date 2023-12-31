import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `https://api.intra.42.fr`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    console.log("getState ==>", getState());
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    //send refresh token to get new accessToken;

    const refreshResult = await baseQuery("/oauth/token", api, extraOptions);
    console.log("refreshResul ==>", refreshResult);

    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      //store the new token
      api.dispatch(setCredentials({ ...refreshResult, user }));
      //retry the original query with new accessToken
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

const UserDataReponseTransform = (response) => {
  const filtredData = {
    id: response.id,
    campus: response.campus,
    email: response.email,
    login: response.login,
    displayname: response.displayname,
    image_url: response.image.link,
    correction_point: response.correction_point,
    wallet: response.wallet,
    cursus_users: response.cursus_users,
    projects_users: response.projects_users,
    skills: response.skills,
    campus: response.campus[0].name,
  };
  console.log("filtredData ==>", filtredData);
  return filtredData;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({
        grant_type,
        client_id,
        client_secret,
        code,
        redirect_uri,
        state,
      }) => ({
        url: `https://api.intra.42.fr/oauth/token`,
        method: "POST",
        params: {
          grant_type,
          client_id,
          client_secret,
          code,
          redirect_uri,
          state,
        },
      }),
      transformResponse: (response) => {
        const { access_token, refresh_token } = response;
        return { access_token, refresh_token };
      },
    }),
    getConnetedUser: builder.query({
      query: () => `https://api.intra.42.fr/v2/me`,
      transformResponse: UserDataReponseTransform,
    }),
    getCoalition: builder.query({
      query: (id) => `https://api.intra.42.fr/v2/users/${id}/coalitions`,
    }),
    getUsersData: builder.query({
      query: (id) => `https://api.intra.42.fr/v2/users/${id}`,
      transformResponse: UserDataReponseTransform,
    }),
  }),
});

export const {
  useLoginMutation,
  useGetConnetedUserQuery,
  useGetCoalitionQuery,
  useGetUsersDataQuery,
} = apiSlice;
