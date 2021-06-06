import { AntDesign } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction } from "react";
import { Platform, TextInput, View } from "react-native";
import { SearchInputProps } from "../../types/types";
import styles from "./styles";

/**
 *
 * @param searchTerm - The search term that will be used to filter the movies
 * @param setSearchTerm - Set State Action that handles the OnChangeText
 * @returns Search Input Component
 */
export const SearchInput = ({
  searchTerm,
  setSearchTerm,
}: SearchInputProps) => {
  const { container, textBackground } = styles;
  return (
    <View style={container}>
      <View style={textBackground}>
        <TextInput
          placeholder='Search for Movies'
          style={{
            ...styles.textInput,
            top: Platform.OS === "android" ? 2 : 0,
          }}
          autoCapitalize={"none"}
          autoCorrect={false}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <AntDesign name='search1' size={25} color='grey' />
      </View>
    </View>
  );
};
