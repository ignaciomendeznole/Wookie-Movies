import { Dispatch, SetStateAction } from "react";

export type MoviesResponse = {
  movies: Movie[];
};

export type Movie = {
  backdrop: string;
  cast: string[];
  classification: Classification;
  director: string[] | string;
  genres: string[];
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
};

export enum Classification {
  The13 = "13+",
  The18 = "18+",
  The7 = "7+",
}

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  WatchList: undefined;
};

export type MoviePosterProps = {
  movie: Movie;
  height?: number;
  width?: number;
  backdrop?: string;
  activeOpacity?: number;
};

export type ButtonProps = {
  title: string;
  movie: Movie;
};

export type HorizontalSliderProps = {
  title: string;
  movies: Movie[];
};

export type SearchInputProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};
