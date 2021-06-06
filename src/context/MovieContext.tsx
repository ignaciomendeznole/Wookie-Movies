import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import { Movie } from '../types/types';

//Implemented Context to keep record of WatchList movies

interface MovieContextProps {
  watchList: Movie[];
  addToWatchList: (movie: Movie) => void;
  removeFromWatchList: (id: string) => void;
}

export const MovieContext = createContext({} as MovieContextProps);
/**
 *
 * @param children Every child component inside the Provider
 * @returns Provider for the WatchList state and the Create and Delete Methods
 */
export const MovieProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [watchList, setWatchList] = useState<Movie[]>([]);

  /**
   * Method that adds a movie to the WatchList State
   * @param movie Movie that will be added to the WatchList.
   * @returns Alert based on succesfull movie addition.
   */
  const addToWatchList = async (movie: Movie) => {
    // Check if the movie is already in our watchlist, set the state with only the different id movies
    let movieInMovies = false;
    watchList.map((wl: Movie) => {
      if (wl.id === movie.id) {
        movieInMovies = true;
      }
    });

    if (movieInMovies) {
      return Alert.alert('Error', '¡The movie is already in your WatchList!', [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]);
    }
    setWatchList([...watchList, movie]);

    return Alert.alert(
      '¡Success!',
      '¡The movie was successfully added to your WatchList!',
      [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]
    );
  };

  /**
   * Removes a movie from the WatchList
   * @param id ID of the movie that is set to be removed from the WatchList
   */
  const removeFromWatchList = (id: string) => {
    const filtered = watchList.filter((movie) => movie.id !== id);
    setWatchList([...filtered]);

    Alert.alert(
      '¡Success!',
      'The movie was successfully removed from your WatchList',
      [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]
    );
  };
  return (
    <MovieContext.Provider
      value={{
        watchList,
        addToWatchList,
        removeFromWatchList,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
