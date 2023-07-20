import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Avatar from "../../components/atoms/Avatar";
import { Picker } from "@react-native-picker/picker";
import UserInformations from "./UserInformations";
import SplitComponent from "./SplitComponent";
import ProjectsCards from "./ProjectsCards";
import { useGetConnetedUserQuery } from "../../Redux/api/apiSlice";
import SkillsInfomration from "./Skills";

const PublicProfile = (props) => {
  const { data, isLoading } = props.route.params;
  // const { data, error, isLoading } = useGetConnetedUserQuery();
  const [cursus, setCursus] = useState(null);
  const [selectedCursus, setSelectedCursus] = useState(null);

  useEffect(() => {
    // console.log("data===>", data?.cursus_users.map((el) => el))
    if (!isLoading) {
      // console.log("data==>", data.cursus_users[0].cursus.id);
      setCursus(data?.cursus_users.map((el) => el));
      // console.log("kikiki==>", data?.cursus_users.map((el) => el)[data?.cursus_users.map((el) => el).length - 1].cursus_id)
      setSelectedCursus(
        data?.cursus_users.map((el) => el)[
          data?.cursus_users.map((el) => el).length - 1
        ]
      );
    }
  }, [isLoading]);

  useEffect(() => {
    if (selectedCursus) {
      // console.log("projects==>", typeof data?.projects_users[0].cursus_ids[0])
      // console.log("selectedCursus==>", data?.projects_users.filter((el) => el.cursus_ids[0] === selectedCursus.cursus_id))
    }
  }, [selectedCursus]);

  return (
    <View style={PUBLIC_PROFILE_CONTAINER}>
      <ScrollView
        style={{
          width: "100%",
        }}
      >
        {!isLoading && data && cursus && selectedCursus && (
          <UserInformations
            data={data}
            setCursus={setCursus}
            cursus={cursus}
            selectedCursus={selectedCursus}
            setSelectedCursus={setSelectedCursus}
          />
        )}
        <SplitComponent title={"Projects"} />
        {!isLoading && selectedCursus && data && (
          <ProjectsCards
            projects={data?.projects_users.filter(
              (el) =>
                (el.cursus_ids[0] === selectedCursus.cursus_id &&
                  el.status === "finished") ||
                el.status === "in_progress" ||
                el.status === "failed"
            )}
          />
        )}
        <SplitComponent title={"Skills"} />
        {!isLoading && selectedCursus && (
          <SkillsInfomration
            skills={data.cursus_users.filter(
              (el) => el.cursus.id === selectedCursus.cursus_id
            )}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default PublicProfile;

const PUBLIC_PROFILE_CONTAINER = {
  flex: 1,
  alignItems: "center",
};
