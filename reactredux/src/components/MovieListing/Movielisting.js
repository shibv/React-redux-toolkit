import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import { matchPath } from 'react-router-dom';
import Moviecard from '../MovieCard/Moviecard';
import "./Movielisting.css"


const Movielisting = () => {

  const movies = useSelector(getAllMovies);
  let renderMovies = " ";

   renderMovies = movies.Response === "True" ? (
      
         movies.Search.map((movie, index) => (
          <Moviecard key={index} data={movie} />
         ))
  ) : (
    <div className='movies-error'>
    <h3>{movies.error}</h3>
    </div>
  );
  return (
       <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movie</h2>
          <div className="movie-container">
          {renderMovies}
          </div>
        </div>

       </div>
  )
};

export default Movielisting
