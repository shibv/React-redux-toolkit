import React, { useEffect } from 'react'
import Movielisting from '../MovieListing/Movielisting'
import movieApi from '../../common/api/MovieApi.js'

import {APIKEY} from '../../common/api/MovieApiKey.js'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice.js'


const Home = () => {

  const dispatch = useDispatch();
  const movieText = "hary";

  useEffect(() => {

    

    const fetchMovie = async () => {
      
      const response = await movieApi.get(
        `?apikey=${APIKEY}&s=${movieText}&type=movie`
        )
        .catch((err) =>{
          console.log(err)
        })
        console.log(response.data)
        dispatch(addMovies(response.data))
    };

    fetchMovie();
  }, [])

  return (
    <div>
    <div className="banner-img"></div>
     <Movielisting />
  </div>
  )
}

export default Home
