import React, { useState } from 'react';
import MovieList from './MovieList';

const Home = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = 'c119a3aa';

  const fetchMovies = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    setLoading(true);
    setMovies([]);

    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(search)}&apikey=${apiKey}`);
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="hero">
        <div className="overlay" />
        <div className="hero-content">
          <h1>Welcome to MovieScope</h1>
          <p className="tagline">Your personal gateway to a world of cinema.</p>
          <form className="search-bar" onSubmit={fetchMovies}>
            <input
              type="text"
              id="query"
              placeholder="Search your favorite movie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button id="searchBtn" type="submit">Search</button>
          </form>
        </div>
      </div>

      <MovieList movies={movies} loading={loading} />
    </div>
  );
};

export default Home;
