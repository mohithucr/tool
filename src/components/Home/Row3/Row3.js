import React from 'react'
import './Row3.css'
import soil from './soil.png'

function Row1() {
  return (
    <div className='card'>
      <div className='soil-image'>
        <img src={soil} />   
        <p> Crop</p>
      </div>
      <div className = "crop_details ">
        <p className = "input">
          <button>click me</button>
        </p> 
        <p><small>Corn Plant</small></p>
      </div>
      
    </div>
  )
}

export default Row1
