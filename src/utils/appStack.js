import UserStack from "../navigation/UserStack";
import { AuthStack } from "../navigation/UserStack";
import { useSelector } from "react-redux";
const AppStack = () => {
    const isAuth = useSelector((state) => state.auth);

    console.log("isAuth ==>", isAuth)
    return isAuth.isAuthenticated ? <UserStack /> : <AuthStack />;
}

export default AppStack;