import React from 'react'
import './Row4.css'
import irrigation from './irrigation.png'

function Row1() {
  return (
    <div className='card'>
      <div className='irrigation-image'>
        <img src={irrigation} />   
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
