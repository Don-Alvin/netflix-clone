import React, { useState } from 'react'
import Banner from './Banner'
import './Home.css'
import Navbar from './Navbar'

const Home = () => {


  return (
    <div className='home'>
        <Navbar />
        <Banner />
    </div>
  )
}

export default Home