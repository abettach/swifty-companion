import React from "react";
import { View, Text } from "react-native";

const SplitComponent = (props) => {
  const { title } = props;
  return (
    <View style={SPLIT_BAR_STYLE}>
      <View style={SPLIT_BAR_RIGHT_STYLE}>
        <Text style={{ color: "white", fontSize: 14, fontWeight: 700 }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default SplitComponent;

const SPLIT_BAR_STYLE = {
  width: "100%",
  height: 10,
  backgroundColor: "#246EE9",
  marginBottom: 20,
};

const SPLIT_BAR_RIGHT_STYLE = {
  width: "20%",
  height: 30,
  backgroundColor: "#246EE9",
  borderBottomRightRadius: 20,
  alignItems: "center",
  justifyContent: "center",
};
