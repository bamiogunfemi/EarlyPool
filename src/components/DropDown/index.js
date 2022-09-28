import { Link } from "react-router-dom";
import React from 'react'
import './index.css';

function index() {
  return (
    <div className='dropdown ml-auto text-primary'>
      <div  className='dropdownLink'><Link to= '/login'> Login</Link></div>
      <div className='dropdownLink '> <button className='bg-primary text-white normal-case py-[8px] px-[40px]'> <Link to='/register'> Get started </Link> </button> </div>
   </div>
  )
}

export default index
