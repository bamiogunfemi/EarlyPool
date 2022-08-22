import './index.css'
import React from 'react'

function index({StudentImage}) {
  return (
    <div className='StudentImg'>
      <img src={StudentImage} alt="StudentImage" />
    </div>
  )
}

export default index
