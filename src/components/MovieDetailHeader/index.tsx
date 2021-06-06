import React from "react";
import { Text, View } from "react-native";
import { Movie } from "../../types/types";
import { MoviePoster } from "../MoviePoster";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { useRatingParser } from "../../helper/useRatingParser";

interface Props {
  movie: Movie;
}

/**
 *
 * @param movie - The entire movie object
 * @returns Functional component of the Movie Header in the Movie Screen
 */
export const MovieDetailHeader = ({ movie }: Props) => {
  const rating = useRatingParser(movie.imdb_rating);
  const { container, titleContainer, title, star, starsContainer } = styles;

  return (
    <View style={container}>
      <View>
        <MoviePoster movie={movie} height={290} width={170} activeOpacity={1} />
      </View>
      <View style={titleContainer}>
        <Text style={title}>
          {movie.title} ({movie.imdb_rating})
        </Text>
        <View style={starsContainer}>
          {[0, 0, 0, 0, 0].map((element, i) => (
            <FontAwesome
              name={i < rating ? "star" : "star-o"}
              size={25}
              color={"#e47911"}
              style={star}
              key={i}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
