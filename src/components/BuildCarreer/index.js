import './index.css'
import React from 'react'
import StudentImg from '../StudentImg'
import StudentInfo from '../StudentInfo'
import StudentImage from '../../assets/images/Group 43245.png'

function index() {
  return (
    <div>
      <div className='build'>
        <StudentImg StudentImage={StudentImage}/>
        <StudentInfo header='Want To Build Your Career As A Student?' para='We connect  students to the best opportunities and help companies hire the best student talents.' /* figure='1000+' figureText='Students Registered' *//>
      </div>
    </div>
  )
}

export default index
