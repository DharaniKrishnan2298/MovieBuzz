import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import './WatchlistPage.css';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  rating?: number;
}

const WatchlistPage: React.FC = () => {
  const { watchlist, removeFromWatchlist } = useMovieContext();

  const handleRemoveMovie = (imdbID: string) => {
    removeFromWatchlist(imdbID);
  };

  return (
    <div className="watchlist-page">
      <h1>Watchlist Movies</h1>
      <div className="movie-list">
        {watchlist.length > 0 ? (
          watchlist.map((movie: Movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              
              <button onClick={() => handleRemoveMovie(movie.imdbID)}>Remove from Watchlist</button>
            </div>
          ))
        ) : (
          <p>No movies in your watchlist.</p>
        )}
      </div>
    </div>
  );
};

export default WatchlistPage;
