import React from "react";
import { FlatList, Text, View } from "react-native";
import { HorizontalSliderProps, Movie } from "../../types/types";
import { MoviePoster } from "../MoviePoster";
import styles from "./styles";

/**
 *
 * @param movies - The array of all the movies
 * @param title - The genre title
 * @returns Slider Component that will display every movie from a specific genre by filtering by the movie's genre
 */
export const HorizontalSlider = ({ title, movies }: HorizontalSliderProps) => {
  const movieByGenre = movies.filter((movie) => movie.genres.includes(title));
  const { titleText } = styles;

  return (
    <View style={{ height: title ? 350 : 220 }}>
      {title && <Text style={titleText}>{title}</Text>}

      <FlatList
        data={movieByGenre}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MoviePoster
            movie={item}
            height={300}
            width={200}
            activeOpacity={0.8}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};
