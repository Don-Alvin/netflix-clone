import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import requests from '../../Request'

const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        )
        return request
      }

      fetchData()
    
    }, [])
    

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + ' ...read more' : string
    }

  return (
    <header 
        className='banner' 
        style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
            }}
        >
        <div className="banner__contents">
            <h1 className="banner__title">{movie?.title}</h1>
            <div className="banner__btns">
                <button className='banner__btn'>Play</button>
                <button className='banner__btn'>My List</button>
            </div>
            <p className="banner__description">
                {truncate(movie?.overview, 150)}
            </p>
        </div>
        <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner