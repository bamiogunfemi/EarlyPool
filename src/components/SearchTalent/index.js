import './index.css'
import React from 'react'
import StudentImg from '../StudentImg'
import StudentInfo from '../StudentInfo'
import StudentImage from '../../assets/images/unsplash_dnL6ZIpht2s (2).png'

function index() {
  return (
    <div>
      <div className='build'>
      <StudentInfo header='Searching For The Best Student Talent?' para='We connect  students to the best opportunities and help companies hire the best student talents.' figure='100+' figureText='Recruiters Registered'/>
        <StudentImg StudentImage={StudentImage}/>
      </div>
    </div>
  )
}

export default index
