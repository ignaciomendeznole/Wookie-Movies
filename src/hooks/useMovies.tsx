import { useEffect, useState } from 'react';
import axiosClient from '../config/axiosClient';
import { Movie, MoviesResponse } from '../types/types';
/**
 * Custom Hook used to manage the fetching and genre sorting.
 * @returns Object with movies, genre and loading state
 */
export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [genres, setGenres] = useState<any[]>([]);

  /**
   * Function that fetches the movies and then sorts the movies by genres
   */
  const fetchMovies = async () => {
    const { data } = await axiosClient.get<MoviesResponse>('/movies');
    setMovies(data.movies);
    getUniqueGenres();
    setIsLoading(false);
  };

  /**
   * Iterates over every movie and extracts the genres by setting them into a genres state
   */
  const getUniqueGenres = () => {
    let set = new Set();
    movies.forEach((movie: Movie) => {
      movie.genres.forEach((genre: string) => set.add(genre));
    });
    const genresArray = Array.from(set);
    setGenres(genresArray);
  };

  useEffect(() => {
    fetchMovies();
  }, [movies]);

  return {
    movies,
    isLoading,
    genres,
  };
};
