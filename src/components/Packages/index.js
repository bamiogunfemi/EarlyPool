import './index.css'
import React from 'react'


function index({Logo, LogoText}) {
  return (
    <div className='packages'>
      <img className='img' src={Logo} alt="Logo" />
      <h2>{LogoText}</h2>
    </div>
  )
}

export default index
