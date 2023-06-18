import React from "react";
import UserStack from "./src/navigation/UserStack";
import Login from "./src/screens/Login";
// import { useFonts } from "expo-font";

function App() {
  // let [fontsLoaded] = useFonts({
  //   "Poopins-Black": require("./assets/fonts/Poppins-Black.ttf"),
  //   "Poopins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  //   "Poopins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  //   "Poopins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  //   "Poopins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  //   "Poopins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  //   "Poopins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  // });
  const isAuth = true;

  return isAuth ? <UserStack /> : <Login />;
}

export default App;
