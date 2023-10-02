import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native";
const ShowPost = (item) => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "white",
          marginVertical: 5,
          paddingVertical: 10,
        }}
      >
        <View>
          <ion-icon name="logo-firefox"></ion-icon>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShowPost;
