import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native";
const Header = (props) => {
  return (
    <View style={{ marginLeft: 15 }}>
      <View style={{ fontWeight: "bold", fontSize: 28 }}>
        <Text>Login</Text>
      </View>
    </View>
  );
};

export default Header;
