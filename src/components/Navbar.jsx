import React from 'react'





const style = {
    header: `flex justify-between items-center p-4 z-[100] w-full absolute`,
    heading: `text-red-600 text-4xl font-bold cursor-pointer`,
    signin: `text-white pr-4`,
    signup: `bg-red-600 px-6 py-2 rounded cursor-pointer`
}

const Navbar = () => {
  return (
    <div className={style.header}>
        <h1 className={style.heading}>MyFlix</h1>
        <div>
            <button className={style.signin}>Sign in</button>
            <button className={style.signup}>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar