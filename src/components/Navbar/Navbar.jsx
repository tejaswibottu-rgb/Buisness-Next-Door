import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-logo">L</span>
        <span className="brand-name">LocalBoost</span>
      </div>
      <ul className="Nav-links">
        <li><a href="#">Discover</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><button className="signin-btn">Sign In</button></li>
        <li><button className="getstarted-btn">Get Started</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
