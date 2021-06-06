import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { WatchListMovieCard } from "../components/WatchListMovie";
import { MovieContext } from "../context/MovieContext";

/**
 *
 * @returns WatchList Screen
 */
const WatchListScreen = () => {
  const { watchList } = useContext(MovieContext);
  const { container } = styles;
  return (
    <View style={container}>
      <FlatList
        data={watchList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <WatchListMovieCard movie={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default WatchListScreen;
