import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className="bg-primary">
      <footer >
        <div className="footer__info">
          <h2>Contact Us </h2>
          <p>Support@earlypool.com</p>
        </div>
        <div> Copyright2022.EarlyPool.All rights reserved. </div>
      </footer>
    </div>
  );
}

export default index;
