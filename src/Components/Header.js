import React from 'react'
import logo from "../assets/lost&found3.png";
import "./Header.css";
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div className="header__container">
      <p></p>
      <div className="header__logo">
        <img src={logo} alt="logo" width={160} height={80} />
      </div>
      <Avatar sx={{height:32,width:32}} src="/broken-image.jpg" />
    </div>   
  )
}

export default Header