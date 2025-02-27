import React from 'react'

import "./About.css"
import Card from '../Card/Card'


function About() {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalifo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : RAKSHIT KUMAR
              </li>
              <li>
                <span>GENDER</span> : MALE
              </li>
              <li>
                <span>LANGUAGE</span> : ENGLISH , HINDI
              </li>
            </ul>
          </div>
          <div className="Education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>Degree</span> : BCA
              </li>
              <li>
                <span>YEAR</span> : 2021-2024
              </li>
              <li>
                <span>CGPA</span> : 8.583
              </li>
            </ul>
          </div>
          <div className="Skills">
            <h1>Skills</h1>
            <ul>
              <li>
                <span>Languages</span> : Python , JavaScript , HTML , CSS
              </li>
              <li>
                <span>Frameworks</span> : Django, Django RestFramework , React , BootStrap
              </li>
              <li>
                <span>Database</span> : MySQL, PortgreSQl , SQLite
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="Django"/>
        <Card title="React"/>
        <Card title="PostgreSQL"/>
      </div>
    </div>
  )
}

export default About
