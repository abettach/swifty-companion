import React from "react";
import { View, Text, Image } from "react-native";

const Avatar = (props) => {
  const { firstName, lastName, style, textStyle, image } = props;
  return (
    <View style={[AVATAR_CONTAINER_STYLE, style]}>
      {image ? (
        <Image source={image} style={[{ width: "100%", height: "100%" }]} />
      ) : (
        <Text style={[{ color: "white", fontSize: 20 }, textStyle]}>
          {firstName[0]}
          {lastName[0]}
        </Text>
      )}
    </View>
  );
};

export default Avatar;

const AVATAR_CONTAINER_STYLE = {
  width: 50,
  height: 50,
  borderRadius: 1000,
  backgroundColor: "#694BFD",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const AVATAR_TEXT_STYLE = {
  color: "white",
  fontSize: 18,
};
