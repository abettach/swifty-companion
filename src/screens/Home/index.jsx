import React, { useEffect } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import AppBackgorund from "../../assets/images/app-background.png";
import { SearchIcon } from "../../components/icons";
import { FONT_SIZE } from "../../app.style";
import SearchBar from "../../components/moleculs/SearchBar";
import Avatar from "../../components/atoms/Avatar";
import User from "../../assets/images/User.png";
import UsersCard from "../../components/moleculs/UsersCard";
import { useSelector } from "react-redux";
import { useGetConnetedUserQuery } from "../../Redux/api/apiSlice";
const BackroundImage = () => {

  return (
    <Image
      source={AppBackgorund}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        resizeMode: "cover",
        position: "absolute",
        zIndex: -1,
        top: 0,
      }}
    />
  );
};
const Data = [
  {
    fullName: "John Doe",
    email: "test@gmail.com",
    login: "johndoe",
  },
  {
    fullName: "John Doe",
    email: "test@gmail.com",
    login: "johndoe",
  },
  {
    fullName: "John Doe",
    email: "test@gmail.com",
    login: "johndoe",
  },
];
const Home = (props) => {
  const authData = useSelector((state) => state.auth);

  const onChange = (text) => {
    console.log("im in on change");
    console.log(text);
  };
  return (
    <>
      <BackroundImage />
      <View style={HOME_STYLE_CONTAINER}>
        <SearchBar onChange={onChange} />
        <View
          style={{
            marginTop: 50,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Data.map((item, index) => {
            return (
              <UsersCard
                key={index}
                fullName={item.fullName}
                login={item.login}
                image={User}
                navigation={props.navigation}
              />
            );
          })}
        </View>
      </View>
    </>
  );
};

export default Home;

const HOME_STYLE_CONTAINER = {
  flex: 1,
  alignItems: "center",
};
