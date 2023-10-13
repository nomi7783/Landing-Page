import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from 'react';


const Header = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);



  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#"><img src={logo}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Resoucing
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
         </div>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Download
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
          <a className="dropdown-item" href="#">Action</a>
         </div>
      </li>
      
    </ul>

    <button className='btn btn-primary'>Register Now</button>

  </div>
    </nav>
    </>
  )
}

export default Header