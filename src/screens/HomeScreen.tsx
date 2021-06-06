import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  StyleSheet,
  Animated,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { Loading } from '../components/Loading';
import { useMovies } from '../hooks/useMovies';

/**
 *
 * @returns Home Screen
 */
const HomeScreen = () => {
  const { width } = Dimensions.get('window');
  const { genres, isLoading, movies } = useMovies();
  const { top } = useSafeAreaInsets();
  const fadeInAnimation = useRef(new Animated.Value(0)).current;
  const { container, textContainer, text } = styles;

  //Animation triggered when the Home Screen component is rendered
  useEffect(() => {
    Animated.timing(fadeInAnimation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, [fadeInAnimation]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Animated.View
      style={{
        ...container,
        marginTop: top + 10,
        opacity: fadeInAnimation,
      }}
    >
      <View style={{ ...textContainer, width }}>
        <Text style={text}>WOOKIE MOVIES</Text>
      </View>
      <FlatList
        data={genres}
        keyExtractor={(item) => item}
        initialNumToRender={4}
        renderItem={({ item }) => (
          <HorizontalSlider title={item} movies={movies} />
        )}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
