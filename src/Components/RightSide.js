import React from 'react'
import "./RightSide.css"
import image1 from "../assets/group5.png";
import image2 from "../assets/group6.png";
import image3 from "../assets/group7.png";
import image4 from "../assets/group8.png";


function RightSide() {
  return (
    <div className="rightside__container">
        <div className="horizontal__line"></div>
        <div className="vertical__line"></div>
        <div className='image__box'>
          <span className='lefttop__image'>
            <img src={image1} alt="lefttop" />
          </span>
          <span className='righttop__image'>
            <img src={image2} alt="lefttop" />
          </span>
          <span className='leftbottom__image'>
            <img src={image4} alt="lefttop" />
          </span>
          <span className='rightbottom__image'>
            <img src={image3} alt="lefttop" />
          </span>
          <h4 className='main__text'>Loosing something is terrible,<br /> We might help you find them.</h4>
          <p className='para__text' >Things don’t value much until unless you loose them. You 
            start realising how important they are only when you lost 
            those items. Loosing things such as ID card, wallet, mobile 
            phone might not impact emotionally but impacts on other 
            aspects. So we thought of making a web application that 
            helps people to find the things that they lost.
          </p>

          <button className='start__button'>Get Started</button>

        </div>
       
    </div>
  )
}

export default RightSide;