import React, { useEffect } from 'react'
import Movielisting from '../MovieListing/Movielisting'
import movieApi from '../../common/api/MovieApi.js'

import {APIKEY} from '../../common/api/MovieApiKey.js'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice.js'
import avt from "../../images/avt.jpg"


const Home = () => {

  const dispatch = useDispatch();
  const movieText = "love";

  useEffect(() => {

    

    const fetchMovie = async () => {
      
      const response = await movieApi.get(
        `?apikey=${APIKEY}&s=${movieText}&type=movie`
        )
        .catch((err) =>{
          console.log(err)
        })
        
        dispatch(addMovies(response.data))
    };

    fetchMovie();
  }, [movieText])

  return (
    <div>
    <div className="banner-img">
      
    </div>
     <Movielisting />
  </div>
  )
}

export default Home
