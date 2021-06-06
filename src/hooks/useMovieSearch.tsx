import { useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";
import { Movie, MoviesResponse } from "../types/types";

/**
 * Custom Hook to manage every aspect of the Search
 * @param searchTerm Value that will be used as the query param to retrieve all matching movies.
 * @returns State with the found movies.
 */
export const useMovieSearch = (searchTerm: string) => {
  const [movieResults, setMovieResults] = useState<Movie[]>([]);

  /**
   * Get all the movies based on the search term
   */
  const loadMovies = async () => {
    const response = await axiosClient.get<MoviesResponse>(
      `/movies?q=${searchTerm}`
    );
    setMovieResults(response.data.movies);
  };

  useEffect(() => {
    loadMovies();
  }, [searchTerm]);
  return {
    movieResults,
  };
};
