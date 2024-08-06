// src/components/MovieCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/movie/${movie.id}`);
    window.location.reload();  // This forces the browser to reload, similar to a manual refresh.
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /></figure>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <button onClick={handleDetailsClick} className="details-button">Details</button>
      </div>
    </div>
  );
};

export default MovieCard;
