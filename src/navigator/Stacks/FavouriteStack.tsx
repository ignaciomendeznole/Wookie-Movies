import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WatchListScreen from "../../screens/WatchListScreen";

export type FavStackParams = {
  WatchListScreen: undefined;
};

const FavStack = createStackNavigator<FavStackParams>();

/**
 *
 * @returns Navigator for the WatchList Stack
 */
export const WatchListNavigator = () => {
  return (
    <FavStack.Navigator screenOptions={{ headerTitle: "Your WatchList" }}>
      <FavStack.Screen name='WatchListScreen' component={WatchListScreen} />
    </FavStack.Navigator>
  );
};
