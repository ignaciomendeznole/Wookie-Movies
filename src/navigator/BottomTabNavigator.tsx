import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./Stacks/HomeStackNavigator";
import SearchStackNavigator from "./Stacks/SearchStack";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { BottomTabParamList } from "../types/types";
import { WatchListNavigator } from "./Stacks/FavouriteStack";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
/**
 *
 * @returns Bottom Tab Navigator for the App Navigator
 */
const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='WatchList'
        component={WatchListNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='glasses' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='search' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

/**
 *
 * @param props name of the icon and color of the icon
 * @returns Icon Component for each Bottom Tab Screen
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome5>["name"];
  color: string;
}) => {
  return <FontAwesome5 size={26} style={{ marginBottom: -3 }} {...props} />;
};

export default BottomTabNavigator;
