import React from 'react'
import "./Nav.css"
import {Link} from "react-scroll"

function Nav() {
  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul>
            <Link to="home"><li>Home</li></Link>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Nav
