import React from 'react'

import "../styles/Card.css";

export default function Card({link, title, subtitle}) {
  return (
    <div className="Card">
            <img className="Card-image" src={link} alt={title}/>
            <h3 className="Card-title">{title}</h3>
            <p className="Card-subtitle">{subtitle}</p>
          </div>
  )
}