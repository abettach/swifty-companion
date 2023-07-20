import React from "react";
import { View, Image } from "react-native";
import AppBackgorund from "../../assets/images/app-background.png";
import SearchBar from "../../components/moleculs/SearchBar";
import UsersCard from "../../components/moleculs/UsersCard";

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

const Home = (props) => {
  const [search, setSearch] = React.useState("");
  const [onSearch, setOnSearch] = React.useState(false);

  const onChange = (text) => {
    setSearch(text);
    setOnSearch(false);
  };
  return (
    <>
      <BackroundImage />
      <View style={HOME_STYLE_CONTAINER}>
        <SearchBar
          onChange={onChange}
          onSearchClick={() => setOnSearch(true)}
        />

        <View
          style={{
            marginTop: 50,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {onSearch && (
            <UsersCard
              fullName={"test"}
              login={"test"}
              navigation={props.navigation}
              search={search.toLowerCase()}
            />
          )}
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
