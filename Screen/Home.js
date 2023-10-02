import React from "react";
import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import styles from "./Home.style";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="apps" size={32} color="blue" />
        </View>
      </View>
      <View style={styles.share_photo}>
        <View style={styles.share}>
          <Ionicons name="pencil" size={32} color="blue" />
          <Text>Đăng bài</Text>
        </View>

        <View style={styles.photo}>
          <Ionicons name="camera" size={32} color="blue" />
          <Text style>Photo</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
