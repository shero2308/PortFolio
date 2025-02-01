import React, { useRef } from 'react'
import "./Nav.css"
import {Link} from "react-scroll"

function Nav() {

  const menu=useRef()
  const phone=useRef()

  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopmenu'>
            <Link to="home" smooth={true} duration={500} activeClass='active' spy={true}><li>Home</li></Link>
            <Link to="about" smooth={true} duration={500} activeClass='active' spy={true}><li>About</li></Link>
            <Link to="projects" smooth={true} duration={500} activeClass='active' spy={true}><li>Projects</li></Link>
            <Link to="contact" smooth={true} duration={500} activeClass='active' spy={true}><li>Contact</li></Link>
        </ul>
        <div className="hamburger" ref={menu} onClick={()=>{
          phone.current.classList.toggle("activephone")
          menu.current.classList.toggle("activeham")
          }}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>
        <ul className='phonemenu' ref={phone}>
            <Link to="home" smooth={true} duration={500} activeClass='active' spy={true}><li>Home</li></Link>
            <Link to="about" smooth={true} duration={500} activeClass='active' spy={true}><li>About</li></Link>
            <Link to="projects" smooth={true} duration={500} activeClass='active' spy={true}><li>Projects</li></Link>
            <Link to="contact" smooth={true} duration={500} activeClass='active' spy={true}><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Nav
