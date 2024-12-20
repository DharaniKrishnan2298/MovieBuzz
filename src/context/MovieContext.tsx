import React, { createContext, useContext, useState } from 'react';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  rating?: number;
}

interface MovieContextType {
  watched: Movie[];
  watchlist: Movie[];
  addToWatched: (movie: Movie) => void;
  addToWatchlist: (movie: Movie) => void;
  removeFromWatched: (imdbID: string) => void;
  removeFromWatchlist: (imdbID: string) => void;
  updateMovieRating: (imdbID: string, newRating: number) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [watched, setWatched] = useState<Movie[]>([]);
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  const addToWatched = (movie: Movie) => {
    setWatched((prevWatched) => {
      const existingMovieIndex = prevWatched.findIndex((m) => m.imdbID === movie.imdbID);
      
      if (existingMovieIndex >= 0) {
        const updatedMovie = { ...prevWatched[existingMovieIndex], rating: Math.min(movie.rating ?? 0, 10) };
        return [
          ...prevWatched.slice(0, existingMovieIndex),
          updatedMovie,
          ...prevWatched.slice(existingMovieIndex + 1),
        ];
      } else {
        return [...prevWatched, { ...movie, rating: Math.min(movie.rating ?? 0, 10) }];
      }
    });
  };

  const addToWatchlist = (movie: Movie) => {
    if (!watchlist.some((watchlistMovie) => watchlistMovie.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatched = (imdbID: string) => {
    setWatched((prevWatched) => prevWatched.filter((movie) => movie.imdbID !== imdbID));
  };

  const removeFromWatchlist = (imdbID: string) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter((movie) => movie.imdbID !== imdbID));
  };

  const updateMovieRating = (imdbID: string, newRating: number) => {
    setWatched((prevWatched) =>
      prevWatched.map((movie) =>
        movie.imdbID === imdbID ? { ...movie, rating: Math.min(newRating, 10) } : movie
      )
    );
  };

  return (
    <MovieContext.Provider
      value={{
        watched,
        watchlist,
        addToWatched,
        addToWatchlist,
        removeFromWatched,
        removeFromWatchlist,
        updateMovieRating,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
