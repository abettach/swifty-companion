import React from "react";
import { View, Text, Pressable } from "react-native";
import { FONT_SIZE } from "../../../app.style";
import Avatar from "../../atoms/Avatar";
import { useGetUsersDataQuery } from "../../../Redux/api/apiSlice";

const UsersCard = (props) => {
  const { navigation, search } = props;
  console.log("search: ", search);
  const { data, isLoading } = useGetUsersDataQuery(search, {
    skip: !search,
    refetchOnMountOrArgChange: search,
  });

  return (
    <>
      {!isLoading && (
        <Pressable
          onPress={() => {
            navigation.navigate("PublicProfile", {
              data: data,
              isLoading: isLoading,
              title: data?.displayname,
            });
          }}
          style={USER_CARD_STYLE}
        >
          <Avatar
            firstName={data?.displayname?.split(" ")[0]}
            lastName={data?.displayname?.split(" ")[1]}
            style={{
              width: 60,
              height: 60,
              backgroundColor: "transparent",
              marginLeft: 17,
              marginRight: 10,
            }}
            image={{ uri: data?.image_url }}
          />
          <View style={CARD_TEXT_CONTAINER}>
            <Text style={CARD_NAME_STYLE}>{data?.displayname}</Text>
            <Text style={CATD_LOGIN_STYLE}>{data?.login}</Text>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default UsersCard;

const USER_CARD_STYLE = {
  backgroundColor: "rgba(247, 247, 247, 1)",
  width: "95%",
  height: 90,
  alignItems: "center",
  marginTop: 29,
  borderRadius: 10,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.15,
  shadowRadius: 9.51,
  elevation: 5,
  flexDirection: "row",
};

const CARD_TEXT_CONTAINER = {
  height: "40%",
  justifyContent: "space-between",
};

const CARD_NAME_STYLE = {
  fontSize: FONT_SIZE.md,
  fontWeight: "bold",
  color: "rgba(0, 0, 0, 1)",
};

const CATD_LOGIN_STYLE = {
  fontSize: FONT_SIZE.sm,
  fontWeight: "bold",
  color: "#CCCCCC",
};
