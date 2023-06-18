import React from "react";
import { View, Text } from "react-native";
const ProjectsCards = () => {
  const projects = [
    {
      name: "Libft",
      status: "Finished",
      grade: "100%",
    },
    {
      name: "Get_Next_Line",
      status: "failed",
      grade: "100%",
    },
    {
      name: "Printf",
      status: "Finished",
      grade: "100%",
    },
    {
      name: "NetPractice",
      status: "Finished",
      grade: "100%",
    },
    {
      name: "NetPractice",
      status: "Finished",
      grade: "100%",
    },
    {
      name: "NetPractice",
      status: "Finished",
      grade: "100%",
    },
    {
      name: "NetPractice",
      status: "Finished",
      grade: "100%",
    },
    {
      name: "NetPractice",
      status: "Finished",
      grade: "100%",
    },
    {
      name: "NetPractice",
      status: "Finished",
      grade: "100%",
    },
  ];
  return (
    <>
      {projects.map((project, index) => {
        return (
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: index === projects.length - 1 ? 20 : 0,
            }}
            key={index}
          >
            <View
              style={[
                PROJECT_CONTAINER_STYLE,
                {
                  backgroundColor:
                    project.status === "Finished"
                      ? "rgba(179, 255, 119, 0.4)"
                      : project.status === "failed"
                      ? "rgba(255, 119, 119, 0.4)"
                      : "blue",
                },
              ]}
            >
              <Text>{project.name}</Text>
              <Text>{project.status}</Text>
              <Text>{project.grade}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default ProjectsCards;
const PROJECT_CONTAINER_STYLE = {
  width: "95%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  marginVertical: 5,
  height: 30,
};
