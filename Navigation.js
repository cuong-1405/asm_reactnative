import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screen/Home";
import Me from "./Screen/Me";
import Messages from "./Screen/Messages";
import MyNetwork from "./Screen/MyNetwork";
import Search from "./Screen/Search";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideKeyboard: true,
  headerShow: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
};

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Ionicons name="home" size={32} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Ionicons name="person" size={32} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Ionicons name="chatbox" size={32} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="MyNetwork"
        component={MyNetwork}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Ionicons name="people" size={32} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Ionicons name="search" size={32} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Navigation;
