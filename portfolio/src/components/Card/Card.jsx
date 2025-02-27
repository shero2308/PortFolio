import React from 'react'
import './Card.css'

function Card({title, image}) {
  return (
    <div className="card">
        <h1>{title}</h1>
    </div>
  )
}

export default Card
