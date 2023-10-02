import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screen/Login"; // Thay đổi đường dẫn theo tên file của bạn
import Navigation from "./Navigation"; // Thay đổi đường dẫn theo tên file của bạn
import Home from "./Screen/Home";
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Navigator;
