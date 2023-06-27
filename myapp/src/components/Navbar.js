import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white ">


  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
      Navbar
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/feature">
            Features
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pricing">
            Pricing
          </NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
 
    </div>
    
  )
}


