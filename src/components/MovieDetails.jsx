// src/components/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../utils/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams(); // This hooks grabs the 'id' from the URL
   

  useEffect(() => {
    console.log("Component is mounting or ID has changed:", id);
    const loadMovieDetails = async () => {
      
      const fetchedMovie = await fetchMovieDetails(id);
      setMovie(fetchedMovie);
      
    };
  
    loadMovieDetails();
    return () => console.log("Cleaning up MovieDetails component for ID:", id);
  }, [id]);  // Make sure ID is the only dependency unless there's a specific reason to include others
  
  

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details container mx-auto p-4">
      <div className="card bg-base-100 shadow-xl flex-row">
        <div className="card-body">
          <h2 className="card-title text-3xl">{movie.title}</h2>
          <p>{movie.overview}</p>
          <div>
            <span className="badge badge-info">{new Date(movie.release_date).getFullYear()}</span>
            {movie.genres.map(genre => (
              <span key={genre.id} className="badge badge-primary m-1">
                {genre.name}
              </span>
            ))}
          </div>
        </div>
        <figure className="px-10 pt-10">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="rounded-xl" />
        </figure>
      </div>
    </div>
  );

  
  
};

export default MovieDetails;
