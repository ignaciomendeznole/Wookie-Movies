import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { MoviePosterProps } from "../../types/types";
import styles from "./styles";

/**
 *
 * @param movie - The entire movie object
 * @param height - Height for the movie poster
 * @param width - Width for the movie poster
 * @returns Movie Poster component used in Home Screen and Movie Screen
 */

export const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
  activeOpacity,
}: MoviePosterProps) => {
  const navigation = useNavigation();
  const { poster } = movie;
  const uri = poster;
  const { posterContainer, imageContainer, image } = styles;
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={{ ...posterContainer, width, height }}
      onPress={() => navigation.navigate("MovieScreen", movie)}
    >
      <View style={imageContainer}>
        <Image source={{ uri }} style={image} />
      </View>
    </TouchableOpacity>
  );
};
