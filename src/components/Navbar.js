import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand mt-1">
      <h3>Github search</h3>
    </div>
    <ul className="navbar-nav ml-lg-4 mt-2">
      <li className="nav-item">
        <h5>
          <NavLink exact to="/" className="nav-link">Home</NavLink>
        </h5>
      </li>
      <li className="nav-item">
        <h5>
          <NavLink to="/about" className="nav-link">Information</NavLink>
        </h5>
      </li>
    </ul>
  </nav>
)
