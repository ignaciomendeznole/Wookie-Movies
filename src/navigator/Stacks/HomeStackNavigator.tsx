import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import MovieScreen from "../../screens/MovieScreen";
import { Movie } from "../../types/types";

export type HomeStackParams = {
  HomeScreen: undefined;
  MovieScreen: Movie;
};

const HomeStack = createStackNavigator<HomeStackParams>();

/**
 *
 * @returns Navigator for the Home Stack
 */
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName='HomeScreen'>
      <HomeStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name='MovieScreen'
        component={MovieScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
