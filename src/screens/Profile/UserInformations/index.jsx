import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import Avatar from "../../../components/atoms/Avatar";
import { useGetCoalitionQuery } from "../../../Redux/api/apiSlice";
import SelectDropdown from "react-native-select-dropdown";

const ColitionImageUrl =
  "https://cdn.intra.42.fr/coalition/cover/76/Commodore_BG.jpg";

const ColitionImage = (props) => {
  const { image } = props;
  return (
    <Image
      source={image}
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

const UserInformations = (props) => {
  const {data, cursus, selectedCursus, setSelectedCursus} = props;
  const {data: coalitionData, isLoading: coalitionDataLoading} = useGetCoalitionQuery(data.id);

  let cursusElements = [
    {
      label: "Wallet",
      value: `${data?.wallet} ₳`,
    },
    {
      label: "Cursus",
      value: <SelectDropdown
      data={cursus?.map((e, index) => (e.cursus.name))}
      defaultButtonText={selectedCursus?.cursus.name}
      buttonStyle={{
        backgroundColor: "transparent",
        height: 25,
        width: "80%",
      }}
      showsVerticalScrollIndicator={false}
      buttonTextStyle={{
        color: "white",
        fontSize: 12,
        textAlign: "left",
      }}
      dropdownStyle={{
        position: "absolute",
        borderRadius: 5,
      }}
      rowTextStyle={{
        // color: "white",
        fontSize: 13,
        paddingHorizontal: 10,
        width: 40,
        textAlign: "left",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
      rowStyle={{ borderColor: "transparent", borderWidth: 0 }}
      onSelect={(selectedItem, index) => {
        setSelectedCursus(cursus[index])
      }}
      buttonTextAfterSelection={(selectedItem, index) => selectedItem}
      rowTextForSelection={(item, index) => item}
      dropdownOverlayColor={"transparent"}
    />,
    },
    {
      label: "Evaluation points",
      value: `${data?.correction_point}`,
    },
    {
      label: "Grade",
      value: selectedCursus?.grade ? selectedCursus?.grade : "Novice",
    },
  ];
  const Level = selectedCursus.level;
  const LevelPercent = `${Level}`.split(".")[1]
    ? addZero(+`${Level}`.split(".")[1])
    : 0;
  return (
    <View style={PUBLIC_PROFILE_USER_STYLE}>
      {!coalitionDataLoading && <ColitionImage image={{uri: coalitionData[0].cover_url}} />}
      <Avatar
        firstName={data?.displayname.split(" ")[0]}
        lastName={data?.displayname.split(" ")[1]}
        image={{uri: data?.image_url}}
        style={{ width: 125, height: 125, marginTop: 40 }}
      />
      <View style={NAME_CONTAINER_STYLE}>
        <Text style={FULLNAME_STYLE}>{data?.displayname}</Text>
        <Text style={LOGIN_STYLE}>{data?.login}</Text>
      </View>
      <View style={ELEMENT_CONTAINER_STYLE}>
        {cursusElements.map((element, index) => {
          return (
            <View style={ELEMENT_CHILD_CONTAINER_STYLE} key={index}>
              <Text style={ELEMENT_CHILD_TEXT_STYLE}>{element.label}</Text>
              {
                element.label === "Cursus" ? element.value : <Text style={ELEMENT_CHILD_TEXT_STYLE}>{element.value}</Text>
              }
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
          {data?.email}
        </Text>
        <View style={PROGRESSIVE_BAR_STYLE}>
          <View
            style={[PROGRESSIVE_BAR_CHILD_STYLE, { width: `${LevelPercent}%` }]}
          />
          <Text style={[LEVEL_TEXT_STYLE]}>{`${Level} %`}</Text>
        </View>
        <Text style={[ELEMENT_CHILD_TEXT_STYLE, { marginTop: 15 }]}>
          {data?.campus}
        </Text>
      </View>
    </View>
  );
};

export default UserInformations;

const PUBLIC_PROFILE_USER_STYLE = {
  width: "100%",
  height: 470,
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
  width: "60%",
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
