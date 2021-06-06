import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { Button } from '../components/Button';
import { MovieDetailHeader } from '../components/MovieDetailHeader';
import { MovieDetailInformation } from '../components/MovieDetailInformation';
import { HomeStackParams } from '../navigator/Stacks/HomeStackNavigator';

interface Props extends StackScreenProps<HomeStackParams, 'MovieScreen'> {}

const { width } = Dimensions.get('window');
/**
 *
 * @param route Used to access the movie passed by params from the Movie Poster
 * @returns Movie Screen
 */
const MovieScreen = ({ route }: Props) => {
  const movie = route.params;
  const { backdrop } = movie;
  const { container, imageBackground } = styles;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={container}>
        <Image style={imageBackground} source={{ uri: backdrop }} />
        <MovieDetailHeader movie={movie} />

        <MovieDetailInformation movie={movie} />

        <Button title='Add To WatchList' movie={movie} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width,
    height: 300,
    flex: 1,
  },
});

export default MovieScreen;
