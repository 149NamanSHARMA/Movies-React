// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MovieDetails from './components/MovieDetails';
import { fetchMovies } from './utils/api';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (searchQuery) => {
    const results = await fetchMovies(searchQuery);
    setMovies(results);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout movies={movies} onSearch={handleSearch} />}>
          
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
