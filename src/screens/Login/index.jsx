import React from "react";
import { View, Text } from "react-native";
import { Pressable } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Pressable style={{ width: "50%", backgroundColor: "blue" }}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
