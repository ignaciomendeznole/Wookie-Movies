import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigator/BottomTabNavigator";
import { MovieProvider } from "./src/context/MovieContext";

const MovieState = ({ children }: any) => {
  return <MovieProvider>{children}</MovieProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <MovieState>
        <BottomTabNavigator />
      </MovieState>
    </NavigationContainer>
  );
};

export default App;
