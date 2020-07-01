import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand ">
      Github search
    </div>
    <ul className="navbar-nav ml-lg-4">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">Information</NavLink>
      </li>
    </ul>
  </nav>
)
