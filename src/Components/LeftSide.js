import React from 'react';
import {FaInstagram, FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import "./LeftSide.css";

function LeftSide() {
  return (
      <div className='leftside__container'>
        <div className="icons">
            <span className='media__icon' > <FaInstagram className='media__icon' size={25} /></span> 
            <span className='media__icon' > <FaGoogle className='media__icon' size={25} /></span>
            <span className='media__icon' >  <FaLinkedin className='media__icon' size={25} /></span>
            <span className='media__icon' >  <FaGithub className='media__icon' size={25} /> </span>
        </div>
        <div className="vertical__line1"></div>
        <div className="vertical__line2"></div>
      </div>
  )
}

export default LeftSide