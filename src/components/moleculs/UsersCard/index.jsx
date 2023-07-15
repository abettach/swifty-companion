import React from "react";
import { View, Text, Pressable } from "react-native";
import { FONT_SIZE } from "../../../app.style";
import Avatar from "../../atoms/Avatar";

const UsersCard = (props) => {
  const { fullName, login, image, navigation } = props;
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("PublicProfile");
      }}
      style={USER_CARD_STYLE}
    >
      <Avatar
        firstName={fullName}
        lastName={fullName}
        style={{
          width: 60,
          height: 60,
          backgroundColor: "transparent",
          marginLeft: 17,
          marginRight: 10,
        }}
        image={image}
      />
      <View style={CARD_TEXT_CONTAINER}>
        <Text style={CARD_NAME_STYLE}>{fullName}</Text>
        <Text style={CATD_LOGIN_STYLE}>{login}</Text>
      </View>
    </Pressable>
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
