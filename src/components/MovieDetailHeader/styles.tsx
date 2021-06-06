import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    top: 150,
  },
  titleContainer: {
    justifyContent: "center",
    marginBottom: 50,
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#ffffffef",
    fontWeight: "bold",
  },
  star: {
    margin: 2,
  },
  starsContainer: {
    alignItems: "flex-end",
    top: 100,
    left: 5,
    flexDirection: "row",
  },
});

export default styles;
