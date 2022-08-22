import React from 'react'
import './index.css'
import { Link } from "react-router-dom";

function index() {
  return (
     <button className='bg-primary text-white normal-case py-[8px] px-[40px] hamburgerAlt'> <Link to='/signup'> Join Now </Link> </button>
  )
}

export default index