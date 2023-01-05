import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './Row.css'

const Row = ({title, fetchURL, isLarge = false}) => {
  
  const [movies, setMovies] = useState([])
  const base_url='https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchURL])
  

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLarge && 'row__posterLarge'}`}
            key={movie.id}
            src={`${base_url}${
            isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie?.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row