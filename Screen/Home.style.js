import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
  appBarWrapper: {
    height: 60,
    backgroundColor: "deepskyblue",
  },
  appBar: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 16,
  },
  share_photo: {
    flexDirection: "row",
  },
  share: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  photo: {
    flex: 1, // Take up 50% of the available space
    backgroundColor: "white", // Example background color for right section
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  baiViet: {
    marginTop: 10,

    alignItems: "center",
  },
});
export default styles;
