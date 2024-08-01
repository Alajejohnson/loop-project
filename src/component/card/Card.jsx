import React from 'react'
import './card.css'

const Card = ({image, text}) => {
  return (
    <div className="Card">
                        <div className="card__grid">
                    <div className="card__grid__items">
                        <img src={image} alt="" />
                        <h5>{text}</h5>
                    </div>
                </div>
    </div>
  )
}

export default Card