import React from 'react'
import logo from "../assets/lost&found3.png";
import "./Header.css";

function Header() {
  return (
    <div className="header__container">
      <div className="header__logo">
        <img src={logo} alt="logo" width={160} height={80} />
      </div>
    </div>   
  )
}

export default Header