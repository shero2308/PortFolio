import React from 'react'
import './Card.css'
import DjangoImg from '../../assets/Djangoimg.png'

function Card() {
  return (
    <div className="card">
        <h1>Django</h1>
        <div className="hovercard">
            <img src={DjangoImg} alt='' />
        </div>
    </div>
  )
}

export default Card
