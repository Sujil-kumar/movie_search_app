import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, loading }) => {
  const moviesRef = useRef(null);

  useEffect(() => {
    if (movies.length > 0 && moviesRef.current) {
      moviesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [movies]);

  if (loading) return <p style={{ textAlign: 'center', color: 'white' }}>Loading...</p>;
  if (!movies.length) return null;

  return (
    <div ref={moviesRef} id="movies" className="movie-grid">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} className="movie-link">
          <div className="movie-card">
            <div className="movie-image">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x445?text=No+Image"
                }
                alt={movie.Title}
              />
            </div>
            <div className="movie-details">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <p>Type: {movie.Type}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
