import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="Nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><button>Register</button></li>
        <li><button>Login</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
