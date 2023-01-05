import React, { useState } from 'react'
import requests from '../../Request'
import Banner from './Banner'
import './Home.css'
import Navbar from './Navbar'
import Row from './Row'

const Home = () => {
 

  return (
    <div className='home'>
        <Navbar />
        <Banner />
        <Row 
          title='Netflix Originals'
          fetchURL={requests.fetchNetflixOriginals}
          isLarge
        />
         <Row 
          title='Popular'
          fetchURL={requests.fetchPopular}
        />
         <Row 
          title='Top Rated'
          fetchURL={requests.fetchTopRated}
        />
         <Row 
          title='Action'
          fetchURL={requests.fetchActionMovies}
        />
         <Row 
          title='Comedies'
          fetchURL={requests.fetchComedyMovies}
        />
         <Row 
          title='Horror'
          fetchURL={requests.fetchHorrorMovies}
        />
         <Row 
          title='Romance'
          fetchURL={requests.fetchRomanceMovies}
        />
         <Row 
          title='Documentaries'
          fetchURL={requests.fetchDocumentaries}
        />
    </div>
  )
}

export default Home