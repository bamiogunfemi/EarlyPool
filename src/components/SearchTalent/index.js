import './index.css'
import React from 'react'
import StudentImg from '../StudentImg'
import StudentInfo1 from '../StudentInfo1'
import StudentImage from '../../assets/images/Group 43240.png'

function index() {
  return (
    <div>
      <div className='search'>
      <StudentInfo1 header='Searching For The Best Student Talent?' para='Hire the best students for your internship, co-op and research' figure='100+' figureText='Recruiters Registered'/>
        <StudentImg StudentImage={StudentImage}/>
      </div>
    </div>
  )
}

export default index
