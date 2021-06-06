import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from "./styles";

/**
 *
 * @returns Functional component for the Loading Component used when HomeScreen is rendered for the first time
 */
export const Loading = () => {
  const { activityContainer } = styles;
  return (
    <View style={activityContainer}>
      <ActivityIndicator size={50} color='grey' />
      <Text>Loading...</Text>
    </View>
  );
};
