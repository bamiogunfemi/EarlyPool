import './index.js'
import React from 'react'
import BamiO from '../../assets/images/Fake Bami 1.png'

function index() {
  return (
    <div className='meet bg-primary'>
      <div className='meet__text'>
        <h2>Meet Our Student Talent of The Month</h2>
        <p>Every month, we shine a spotlight on one student in our community. We ask them questions about their career, education and life generally and how our platform is helping them secure their future</p>
      </div>
      <div>
        <img src={BamiO} alt="BamiO" />
      </div>
    </div>
  )
}

export default index
