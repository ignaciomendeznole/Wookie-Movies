import React, { useState } from 'react';
import { View, StyleSheet, Platform, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { SearchInput } from '../components/SearchInput';
import { useMovieSearch } from '../hooks/useMovieSearch';

/**
 * The component will render the movies that match the search criteria.
 * @returns Search Screen
 */
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { movieResults } = useMovieSearch(searchTerm);
  const { top } = useSafeAreaInsets();
  const { container, list } = styles;

  return (
    <View
      style={{
        ...container,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 5,
      }}
    >
      <SearchInput setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <FlatList
        data={movieResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MoviePoster movie={item} height={300} width={175} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={list}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginTop: 20,
  },
});
