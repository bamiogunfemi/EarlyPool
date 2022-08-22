import './index.css'
import React from 'react'
import BamiO from '../../assets/images/Fake Bami 1.png'

function index() {
  return (
    <div className='meet'>
      <div className='meet__text bg-primary'>
        <h2>Meet Our Student Talent of The Month</h2>
        <p>Every month, we shine a spotlight on one student in our community. We ask them questions about their career, education and life generally and how our platform is helping them secure their future</p>
        <h3 className='meet__text--bami'>Meet Bami Ogunfemi</h3>
      </div>
      <div className= 'meet__img'>
        <img src={BamiO} alt="BamiO" />
      </div>
    </div>
  )
}

export default index
