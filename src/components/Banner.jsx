import React from 'react'
import './Banner.css'

const Banner = () => {

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + ' ...read more' : string
    }

  return (
    <header 
        className='banner' 
        style={{
            backgroundImage: `url('https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
            }}
        >
        <div className="banner__contents">
            <h1 className="banner__title">Movie Name</h1>
            <div className="banner__btns">
                <button className='banner__btn'>Play</button>
                <button className='banner__btn'>My List</button>
            </div>
            <p className="banner__description">
                {truncate(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum explicabo, voluptates error dolor praesentium qui ad ipsum asperiores dicta totam aliquam reiciendis quis natus sequi quo cum consequatur tempora aspernatur? Est autem, quibusdam repudiandae nostrum dolor a velit animi labore quae consequatur deserunt eos vitae facilis minima facere quam?`, 150)}
            </p>
        </div>
        <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner