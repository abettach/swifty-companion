import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { Pressable } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import AppBackgorund from "../../assets/images/app-background.png";
import { FortyTwoIcon } from "../../components/icons";
import * as AuthSession from "expo-auth-session";
import { useAuthRequest } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../Redux/api/apiSlice";
import { setCredentials } from "../../Redux/features/auth/authSlice";

WebBrowser.maybeCompleteAuthSession();

const generateRandomString = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const BackroundImage = () => {
  return (
    <Image
      source={AppBackgorund}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        resizeMode: "cover",
        position: "absolute",
        zIndex: -1,
        top: 0,
      }}
    />
  );
};
const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      redirectUri: `${REDIRECT_URL}`,
    },
    {
      authorizationEndpoint: "https://api.intra.42.fr/oauth/authorize",
      tokenEndpoint: "https://api.intra.42.fr/oauth/token",
    }
  );

  useEffect(() => {
    const handlGetAcessToken = async (code) => {
      const credentials = {
        grant_type: "authorization_code",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
        redirect_uri: REDIRECT_URL,
        state: generateRandomString(50),
      };

      try {
        const result = await login(credentials).unwrap();
        dispatch(
          setCredentials({
            accessToken: result.access_token,
            refreshToken: result.refresh_token,
            isAuthenticated: true,
          })
        );
      } catch (err) {
        console.log("err==>", err);
      }
    };
    if (response?.type === "success") {
      const { code } = response.params;
      handlGetAcessToken(code);
    }
  }, [response, dispatch]);
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <BackroundImage />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 60,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            backgroundColor: "#F7F7F7",
            width: "80%",
            height: 60,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}
          onPress={() => {
            promptAsync({ showInRecents: true });
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 700 }}>Sing in with</Text>
          <FortyTwoIcon
            style={{
              right: 0,
              width: 40,
              height: 40,
              marginLeft: 5,
            }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

// const myData = fetch("https://api.intra.42.fr/v2/me", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${data.access_token}`,
//           },
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             console.log("data: ", data);
//           });
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
