import './index.css'
import React from 'react'

function index({StudentImage}) {
  return (
    <div className='studentImg'>
      <img src={StudentImage} alt="StudentImage" />
    </div>
  )
}

export default index
