import React from "react";
import { View, Text } from "react-native";
import { Bar } from "react-native-progress";

const SkillsInformation = (props) => {
  const { skills } = props;
  //create a react native radar chart using no library
  //https://www.youtube.com/watch?v=ZJ9L6Wm3QZc not working
  //https://www.youtube.com/watch?v=ZJ9L6Wm3QZc

  console.log("skills==>", skills[0].skills);
  return (
    <View
      style={{
        marginBottom: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      {skills[0].skills.map((skill, index) => {
        return (
          <View
            style={{
              width: "90%",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 10,
              // marginBottom: index === skills.length - 1 ? 20 : 0,
            }}
            key={Math.random() * 10}
          >
            <Text style={{ maxWidth: 150 }}>{skill.name}</Text>
            <Bar progress={skill.level / 20} width={200} />
          </View>
        );
      })}
    </View>
  );
};

export default SkillsInformation;
