import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  cardTemplate: {
    width: 280,
    height: 280,
    marginBottom: 30,
  },
  cardImage: {
    width: 280,
    height: 280,
    borderRadius: 10,
  },
  textContainer: {
    position: "absolute",
    width: 280,
    height: 30,
    bottom: 0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
  },
  cardTitle: {
    color: "white",
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default styles;
