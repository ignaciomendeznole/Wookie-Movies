import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";
/**
 *
 * @returns Color Scheme to be used by the entire app
 */
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}
