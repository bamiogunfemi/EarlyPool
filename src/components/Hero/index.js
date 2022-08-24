import React from 'react'
import './index.css'
import WetectLogo from '../../assets/images/image 3.svg'
import HeroImage from '../../assets/images/Group 43238.png'
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      <div className="hero">
        <div className="hero__description">
          <div className="hero__description--content">
            <h2>The Easiest Way To Hire Students, Anywhere</h2>
            <p>We connect  students to the best opportunities and help companies hire the best student talents.</p>
            <button className='bg-primary text-white normal-case py-[8px] px-[40px]'> <Link to='/signup'> Join Now </Link> </button>
          </div>
          <div className="hero__description--footer">
            <p>Trusted By</p>
            <div className='wetechImages'>
            <img src={WetectLogo} alt="WetectLogo" />
            <img src={WetectLogo} alt="WetectLogo" />
            <img src={WetectLogo} alt="WetectLogo" />
            </div>
          </div>
        </div>

        <div className="hero__image">
          <img src={HeroImage} alt="HeroImage" />
        </div>
      </div>
    </div>
  )
}

export default index