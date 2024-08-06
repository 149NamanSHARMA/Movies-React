// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';

const Layout = ({ movies, onSearch }) => {
  return (
    <div>
      <div className="welcome-message">
      Welcome! Search for a movie.
      </div>
      <SearchBar onSearch={onSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
      <Outlet />  
    </div>
  );
};

export default Layout;
