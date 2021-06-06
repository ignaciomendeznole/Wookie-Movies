import React from "react";
import { Text, View } from "react-native";
import { Movie } from "../../types/types";
import styles from "./styles";

interface Props {
  movie: Movie;
}

/**
 *
 * @param movie - The entire movie object
 * @returns Movie Detail Component used in Movie Screen to render the movie information such as release year, cast, director and movie description.
 */

export const MovieDetailInformation = ({ movie }: Props) => {
  const { container, text } = styles;
  return (
    <View style={container}>
      <Text style={text}>
        {movie?.released_on?.split("-", 2)[0]} | {movie?.length} |{" "}
        {Array.isArray(movie?.director)
          ? movie?.director?.map((director, index) =>
              index === movie.director.length - 1
                ? `${director}.`
                : `${director}, `
            )
          : movie.director}
      </Text>
      <Text style={text}>
        Cast:{" "}
        {movie?.cast?.map((cas, index) =>
          index === movie.cast.length - 1 ? `${cas}.` : `${cas}, `
        )}
      </Text>
      <Text style={{ ...text, fontWeight: "bold" }}>Movie Description</Text>
      <Text style={text}>{movie?.overview}</Text>
    </View>
  );
};
