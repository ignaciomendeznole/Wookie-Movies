import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { MovieContext } from "../../context/MovieContext";
import { ButtonProps } from "../../types/types";
import styles from "./styles";

/**
 *
 * @param title - The Button Text
 * @param movie - The movie object
 * @returns Button Component used to add a movie to the WatchList by using the Context method
 */

export const Button = ({ title, movie }: ButtonProps) => {
  const { addToWatchList } = useContext(MovieContext);
  const { container, buttonText } = styles;

  return (
    <TouchableOpacity
      style={container}
      onPress={() => addToWatchList(movie)}
      activeOpacity={0.5}
    >
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
