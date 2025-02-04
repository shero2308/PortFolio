import React from 'react'
import './Home.css'
import pc from "../../assets/pc.png"
import TypingEffect from "react-typing-effect"

function Home() {
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">RAKSHIT KUMAR</div>
          <div className="line3">
            <TypingEffect text={["WEB DEVELOPER" , "SOFTWARE DEVELOPER"]} speed={300} eraseSpeed={50} eraseDelay={700} cursor='|'/>
          </div>
        </div>
      </div>
      <div className="righthome">
        <img src={pc} alt="" />
      </div>

    </div>
  )
}

export default Home
