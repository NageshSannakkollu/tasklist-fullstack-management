import { Link } from "react-router-dom"
import "./index.css"

import React from 'react'

const Header = () =>  (
    <nav className="header-nav-container">
        <Link to="/">
            <img src="https://framerusercontent.com/images/sonK02g1HhQpYMD96kBANE5hEYY.png?scale-down-to=512" alt="logo" className="company-logo"/>
        </Link>
        <ul className="un-order-header-items">
            <Link to="/" className="home-link-item">
                <li>Home</li>
            </Link>
            <li>Products</li>
            <Link to="/about" className="home-link-item">
                <li>About</li>
            </Link>
            <Link to="/contact" className="home-link-item">
                <li>Contact</li>
            </Link>
        </ul>
    </nav>
  )

export default Header