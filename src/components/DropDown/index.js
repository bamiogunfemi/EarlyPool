import { Link } from "react-router-dom";
import React from 'react'
import './index.css';

import { Button } from "@mui/material";


function index() {
  return (
    <div className='dropdown ml-auto'>
      <div className='dropdownLink'><Link to='/'> About</Link></div>
      <div  className='dropdownLink'><Link to='/'>How it works</Link></div>
      <div  className='dropdownLink'><Link to= '/login'> Login</Link></div>

      <div className='dropdownLink '> <button className='bg-primary text-white normal-case py-[8px] px-[40px]'> <Link to='/signup'> Join Now </Link> </button> </div>
   </div>
  )
}

export default index
