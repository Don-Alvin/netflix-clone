import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const scrollHandler = () => {
      if(window.scrollY > 100){
        setNav(false)
      }else {
        setNav(true)
      }
    }

    window.addEventListener('scroll', scrollHandler)

  return (
    <div className={nav ? 'navbar' : 'navbar navbar__black'}>
        <div className="navbar__contents">
            <img className='navbar__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
            <img className='navbar__avatar' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="avatar" />
        </div>
    </div>
  )
}

export default Navbar