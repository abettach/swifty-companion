import React from "react";
import { View, TextInput } from "react-native";
import { SearchIcon } from "../../icons";
import { FONT_SIZE } from "../../../app.style";

const SearchBar = (props) => {
  const { onChange } = props;
  return (
    <View style={SEARCH_CONTAINER_STYLE}>
      <TextInput
        placeholder="Type to search..."
        style={{ paddingHorizontal: 24 }}
        onChangeText={onChange}
      />
      <View style={ICON_STYLE}>
        <SearchIcon />
      </View>
    </View>
  );
};

export default SearchBar;

const SEARCH_CONTAINER_STYLE = {
  backgroundColor: "white",
  width: "90%",
  height: 50,
  borderRadius: 45,
  position: "relative",
  justifyContent: "center",
  // shadowOffset: {width: 10, height: 10},
  // shadowColor: 'black',
  // shadowOpacity: 1,
  elevation: 5,
  marginTop: 103,
  fontSize: FONT_SIZE.sm,
  // fontFamily: "Poppins-Regular",
  // background color must be set
};

const ICON_STYLE = {
  position: "absolute",
  backgroundColor: "#694BFD",
  borderRadius: 50,
  width: 42,
  height: 42,
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  marginRight: 5,
};
