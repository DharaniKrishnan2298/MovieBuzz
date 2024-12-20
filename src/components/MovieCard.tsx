import React, { useState } from 'react';
import { useMovieContext } from '../context/MovieContext';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  rating?: number;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { addToWatched, addToWatchlist } = useMovieContext();
  const [rating, setRating] = useState<number | string>(movie.rating || 0);

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRating = parseInt(event.target.value, 10);
    setRating(newRating);
  };

  const handleAddToWatched = () => {
    addToWatched({ ...movie, rating: typeof rating === 'number' ? rating : parseInt(rating as string, 10) });
  };

  const handleAddToWatchlist = () => {
    addToWatchlist(movie);
  };

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>

      <div className="movie-actions">
        <select value={rating} onChange={handleRatingChange} className="rating-dropdown">
          <option value="0">Rate</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <button onClick={handleAddToWatched} className="add-to-watched-btn">Add to Watched</button>
        <button onClick={handleAddToWatchlist} className="add-to-watchlist-btn">Add to Watchlist</button>
      </div>
    </div>
  );
};

export default MovieCard;
