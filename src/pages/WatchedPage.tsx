import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import './WatchedPage.css';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  rating?: number;
}

const WatchedPage: React.FC = () => {
  const { watched, removeFromWatched } = useMovieContext();

  const handleRemoveMovie = (imdbID: string) => {
    removeFromWatched(imdbID);
  };

  return (
    <div className="watched-page">
      <h1>Watched Movies</h1>
      <div className="movie-list">
        {watched.length > 0 ? (
          watched.map((movie: Movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <p>Rating: {movie.rating ? movie.rating : 'Not rated'}</p>

              <button onClick={() => handleRemoveMovie(movie.imdbID)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No watched movies yet.</p>
        )}
      </div>
    </div>
  );
};

export default WatchedPage;
