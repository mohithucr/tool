import React from 'react'
import './Row2.css'
import drop from './drop.png'

function Row1() {
  return (
    <div className='card'>
      <div className='drop-image'>
        <img src={drop} />   
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
