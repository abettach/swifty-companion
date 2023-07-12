import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "@env";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../Redux/features/accessTokenSlice";

export const GetAccessTokenFromApi = async (code) => {
  const url = "https://api.intra.42.fr/oauth/token";
  const data = {
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: code,
    redirect_uri: `${REDIRECT_URL}`,
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};
