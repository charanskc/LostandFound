import React from 'react'
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import "./Body.css";

function Body() {
  return (
      <div className='body__container'>
          <LeftSide/>
          <RightSide/>
      </div>
  )
}

export default Body;