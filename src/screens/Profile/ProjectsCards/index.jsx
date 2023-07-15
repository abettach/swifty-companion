import React from "react";
import { View, Text } from "react-native";
const ProjectsCards = (props) => {
  const { projects } = props;

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
            key={Math.random() * 10}
          >
            <View
              style={[
                PROJECT_CONTAINER_STYLE,
                {
                  backgroundColor:
                    project.status === "finished"
                      ? "rgba(179, 255, 119, 0.4)" :
                      project.status === "in_progress"
                      ? "rgba(255, 255, 119, 0.4)"
                      : !project.validated
                      ? "rgba(255, 119, 119, 0.4)"
                      : "rgba(255, 255, 119, 0.4)",
                },
              ]}
            >
              <Text>{project.project.name}</Text>
              <Text>{project.status}</Text>
              <Text>{project.final_mark}</Text>
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
