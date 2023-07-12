import React from "react";
import UserStack from "./src/navigation/UserStack";
import Login from "./src/screens/Login";
import { store } from "./src/Redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { AuthStack } from "./src/navigation/UserStack";
import AppStack from "./src/utils/appStack";

function App() {
  const isAuth = false;


  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

export default App;
