import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Avatar from "../../components/atoms/Avatar";
import { Picker } from "@react-native-picker/picker";
import UserInformations from "./UserInformations";
import SplitComponent from "./SplitComponent";
import ProjectsCards from "./ProjectsCards";
import { useGetConnetedUserQuery } from "../../Redux/api/apiSlice";

const Profile = () => {
  const { data, error, isLoading } = useGetConnetedUserQuery();


  return (
    <View style={PUBLIC_PROFILE_CONTAINER}>
      <ScrollView
        style={{
          width: "100%",
        }}
      >
        <UserInformations data={data} />
        <SplitComponent title={"Projects"} />
        <ProjectsCards />
        <SplitComponent title={"Skills"} />
      </ScrollView>
    </View>
  );
};

export default Profile;

const PUBLIC_PROFILE_CONTAINER = {
  flex: 1,
  alignItems: "center",
};
