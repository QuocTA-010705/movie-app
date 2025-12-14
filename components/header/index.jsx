import React from 'react'
import "./index.scss";
import { IoSearch } from "react-icons/io5";
function Header() {
  return (
    <div className='header'>
      <div className="header__logo">
        <img src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg" alt="" />
      </div>
      <ul className="menuItems">
        <li className="menuItem">Movies</li>
        <li className="menuItem">TV shows</li>
        <li className="menuItem"> <IoSearch/></li>
      </ul>
    </div>
  )
}

export default Header;