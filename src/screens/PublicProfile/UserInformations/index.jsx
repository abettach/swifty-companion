import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Avatar from "../../../components/atoms/Avatar";

const ColitionImageUrl =
  "https://cdn.intra.42.fr/coalition/cover/76/Commodore_BG.jpg";

const ColitionImage = () => {
  return (
    <Image
      source={{ uri: ColitionImageUrl }}
      style={{
        flex: 1,
        objectFit: "cover",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

const addZero = (number) => {
  return number < 10 ? `${number}0` : `${number}`;
};

const UserInformations = () => {
  const [selectedCursus, setSelectedCursus] = useState("42Cursus");
  const cursusElements = [
    {
      label: "Wallet",
      value: "65 ₳",
    },
    {
      label: "Cursus",
      value: "42Cursus",
    },
    {
      label: "Evaluation points",
      value: "5",
    },
    {
      label: "Grade",
      value: "Member",
    },
  ];
  const Level = 13.62;
  const LevelPercent = `${Level}`.split(".")[1]
    ? addZero(+`${Level}`.split(".")[1])
    : 0;
  const city = "Khouribga";
  return (
    <View style={PUBLIC_PROFILE_USER_STYLE}>
      <ColitionImage />
      <Avatar
        firstName="Achraf"
        lastName="Bettachi"
        style={{ width: 125, height: 125, marginTop: 20 }}
      />
      <View style={NAME_CONTAINER_STYLE}>
        <Text style={FULLNAME_STYLE}>Achraf Bettachi</Text>
        <Text style={LOGIN_STYLE}>abettach</Text>
      </View>
      <View style={ELEMENT_CONTAINER_STYLE}>
        {cursusElements.map((element) => {
          return (
            <View style={ELEMENT_CHILD_CONTAINER_STYLE}>
              <Text style={ELEMENT_CHILD_TEXT_STYLE}>{element.label}</Text>
              <Text style={ELEMENT_CHILD_TEXT_STYLE}>{element.value}</Text>
            </View>
          );
        })}
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={[ELEMENT_CHILD_TEXT_STYLE, { marginTop: 40 }]}>
          abettach@1337student.ma
        </Text>
        <View style={PROGRESSIVE_BAR_STYLE}>
          <View
            style={[PROGRESSIVE_BAR_CHILD_STYLE, { width: `${LevelPercent}%` }]}
          />
          <Text style={[LEVEL_TEXT_STYLE]}>{`${Level} %`}</Text>
        </View>
        <Text style={[ELEMENT_CHILD_TEXT_STYLE, { marginTop: 15 }]}>
          {city}
        </Text>
      </View>
    </View>
  );
};

export default UserInformations;

const PUBLIC_PROFILE_USER_STYLE = {
  width: "100%",
  height: 450,
  backgroundColor: "blue",
  alignItems: "center",
};

const NAME_CONTAINER_STYLE = {
  alignItems: "center",
  justifyContent: "center",
  marginTop: 5,
};

const FULLNAME_STYLE = { color: "white", fontWeight: 700 };
const LOGIN_STYLE = { color: "white", fontWeight: 600 };
const ELEMENT_CONTAINER_STYLE = {
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
};

const ELEMENT_CHILD_CONTAINER_STYLE = {
  backgroundColor: "rgba(69, 69, 69, 0.8)",
  width: "50%",
  height: 25,
  alignItems: "center",
  paddingLeft: 20,
  flexDirection: "row",
  borderRadius: 5,
  marginBottom: 5,
};

const ELEMENT_CHILD_TEXT_STYLE = {
  color: "white",
  fontWeight: 600,
  fontSize: 12,
  marginRight: 20,
};

const PROGRESSIVE_BAR_STYLE = {
  width: "80%",
  backgroundColor: "white",
  borderRadius: 1000,
  height: 20,
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 10,
};

const PROGRESSIVE_BAR_CHILD_STYLE = {
  height: "100%",
  backgroundColor: "#694BFD",
  borderTopLeftRadius: 1000,
  borderBottomLeftRadius: 1000,
  position: "absolute",
  left: 0,
};

const LEVEL_TEXT_STYLE = {
  color: "black",
  fontWeight: 700,
  fontSize: 14,
};
