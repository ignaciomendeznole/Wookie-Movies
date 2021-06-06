import React, { useContext } from 'react';
import { Button, FlatList, Image, Text, View } from 'react-native';
import { MovieContext } from '../../context/MovieContext';
import { Movie } from '../../types/types';
import styles from './styles';

interface Props {
  movie: Movie;
}
/**
 *
 * @param movie - The entire movie object
 * @returns WatchList Movie Component
 */
export const WatchListMovieCard = ({ movie }: Props) => {
  const { removeFromWatchList } = useContext(MovieContext);
  const { container, cardTemplate, cardImage, textContainer, cardTitle } =
    styles;

  return (
    <View style={container}>
      <View style={cardTemplate}>
        <Image
          style={cardImage}
          source={{
            uri: movie.backdrop,
          }}
        />
        <View style={textContainer}>
          <Text style={cardTitle}>{movie.title}</Text>
        </View>
        <Button
          title='Remove from WatchList'
          onPress={() => {
            removeFromWatchList(movie.id);
          }}
        />
      </View>
    </View>
  );
};
