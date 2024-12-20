import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/omdbApi';
import MovieCard from '../components/MovieCard';
import './HomePage.css';
import { useMovieContext } from '../context/MovieContext';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  rating?: number;
}

const HomePage: React.FC = () => {
  const { watched, watchlist, addToWatched, addToWatchlist } = useMovieContext();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await fetchMovies();
      setMovies(movies);
    };
    loadMovies();
  }, []);

  return (
    <div className="home-page">
      <h1> MoviesBuzz</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
