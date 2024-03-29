import React from 'react'
import Packages from '../Packages'
import './index.css'
import CaseLogo from '../../assets/images/Vector (2).svg'
import BookLogo from '../../assets/images/Vector 55.svg'
import TrackLogo from '../../assets/images/Vector (3).svg'
import CommunityLogo from '../../assets/images/Ellipse 41.svg'

function index({header, para, figure, figureText}) {
  return (
    <div>
      <div className='StudentInfo'>
        <h2>{header}</h2>
        <p className='para'>{para}</p>
        <Packages Logo={CaseLogo} LogoText='Unlimited Job Opportunities'/>
        <Packages Logo={BookLogo} LogoText='Courses and Articles To Build Your Career'/>
        <Packages Logo={TrackLogo} LogoText='Track Your Appllications'/>
        <Packages Logo={CommunityLogo} LogoText='Join a Community'/>
        <p className='foot'>{figure}</p>
        <p className='foot__foot'>{figureText}</p>
      </div>
    </div>
  )
}

export default index
