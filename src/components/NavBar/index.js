import React from "react";
import DropDown from "../DropDown";
import "./index.css";
import NavLogo from "../../assets/images/Group 7 1.svg";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Button } from "@mui/material";
=======
import Btn from '../Btn'
>>>>>>> 9f63ef5 (hopefully this goes well)
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="navBar">
        <div className="navBar__left">
          <Link to="/">
            {" "}
            <img src={NavLogo} alt="NavLogo" />
          </Link>
          <Link to="/" className="hamburgerAlt left">
            {" "}
            About{" "}
          </Link>
          <Link to="/" className="hamburgerAlt left">
            {" "}
            How it works{" "}
          </Link>
        </div>
        <div className="navBar__right">
<<<<<<< HEAD
          <Link to="/login" className="hamburgerAlt right">
            {" "}
            Login{" "}
          </Link>
          <Button className="hamburgerAlt bg-primary text-white normal-case">
            {" "}
            <Link to="/signup"> Join Now </Link>{" "}
          </Button>
          <MenuIcon className="hamburger" onClick={() => setOpen(!open)} />
=======
          <Link to='/login' className='hamburgerAlt right'> Login </Link>
          <Btn />
          <Menu className="hamburger"  onClick={() => setOpen(!open)} />
        
>>>>>>> 9f63ef5 (hopefully this goes well)
        </div>
      </div>
      <div className="dropdown">{open && <DropDown />}</div>
    </div>
  );
}

export default NavBar;
