import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 5,
  },
  imageContainer: {
    flex: 1,
    elevation: 5,
  },
  posterContainer: {
    marginHorizontal: 5,
    paddingBottom: 20,
    paddingHorizontal: 7,
    paddingTop: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default styles;
