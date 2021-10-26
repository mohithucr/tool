import React from 'react'
import './Row1.css'
import crop from './crop.png'

function Row1() {
  return (
    <div className='card'>
      <div className='crop-image'>
        <img src={crop} />   
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