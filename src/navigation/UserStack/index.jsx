import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { HouseIcon } from "../../components/icons";
import { PersonIcon } from "../../components/icons";
import { View, Text } from "react-native";
import StaticString from "../../utils/staticStrings.json";
import { FONT_FAMILY, FONT_SIZE, COLORS } from "../../app.style";
import { createStackNavigator } from "@react-navigation/stack";
import PublicProfile from "../../screens/PublicProfile";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const BottomBarStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: TAB_BAR_STYLE,
        tabBarItemStyle: { position: "relative", top: 10 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) return <HouseIcon fill={"#246EE9"} />;
            return <HouseIcon />;
          },
          tabBarLabel: ({ focused }) => (
            <View syle={TAB_BAR_LABEL_CONTAINER}>
              <Text
                style={[
                  TAB_BAR_LABEL_TEXT,
                  {
                    color: focused ? COLORS.primaryBlue : COLORS.primaryGray,
                  },
                ]}
              >
                {StaticString.HomeLable}
              </Text>
              {focused && <View style={CIRCLE} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) return <PersonIcon fill={"#246EE9"} />;
            return <PersonIcon />;
          },
          tabBarLabel: ({ focused }) => (
            <View syle={TAB_BAR_LABEL_CONTAINER}>
              <Text style={TAB_BAR_LABEL_TEXT}>
                {StaticString.ProfileLable}
              </Text>
              {focused && <View style={CIRCLE} />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const UserStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomBarStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="PublicProfile" component={PublicProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserStack;

const TAB_BAR_STYLE = {
  // backgroundColor: "white",
  backgroundColor: "red",
  borderColor: "black",
  margin: 0,
  height: 85,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderWidth: 0,
  shadowOffset: {
    width: 0,
    height: 15,
  },
  shadowOpacity: 0.3,
  shadowRadius: 16.0,
  elevation: 25,
  borderTopLeftRadius: 21,
  borderTopRightRadius: 21,
  backgroundColor: "#fff",
  position: "absolute",
  bottom: 0,
  padding: 10,
  width: "100%",
  height: 84,
  zIndex: 0,
};

const TAB_BAR_LABEL_CONTAINER = {
  backgroundColor: "red",
};

const TAB_BAR_LABEL_TEXT = {
  position: "relative",
  // bottom: 0,
  fontSize: FONT_SIZE.sm,
  // fontFamily: "Poppins-SemiBold",
};

const CIRCLE = {
  width: 40,
  height: 40,
  borderRadius: 100,
  backgroundColor: COLORS.primaryBlue,
  position: "absolute",
  top: 20,
  left: -4,
};
