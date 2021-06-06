import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../../screens/SearchScreen";
import { Movie } from "../../types/types";
import MovieScreen from "../../screens/MovieScreen";

export type SearchScreenStack = {
  SearchScreen: undefined;
  MovieScreen: Movie;
};

const SearchStack = createStackNavigator<SearchScreenStack>();

/**
 *
 * @returns Navigator for the Search Stack
 */
const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name='SearchScreen' component={SearchScreen} />
      <SearchStack.Screen name='MovieScreen' component={MovieScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;
