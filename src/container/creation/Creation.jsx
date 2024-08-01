import React from 'react'
import './creation.css'
import cards from './card'
import { Card } from '../../component'
import { Image__deep__earth } from '../../images'
import { useState } from 'react'

const Creation = () => {
    console.log(cards);
    const [mobImg, btn] = useState(true);
  return (
    <div className="creation section__padding">
        <div className="creation__header">
            <h5>OUR CREATIONS</h5>
            <button className='btn'>SEE ALL</button>
        </div>
        <div className="creation__content">
            {cards.map(({image,image1, text}) => (
                <div className="creation__grid">
                    <div className="creation__grid__items">
                        <img src={image} className='act create' />
                        {mobImg && <img src={image1} className='mobImg' /> }
                        <h5>{text}</h5>
                    </div>
                </div>

            )            
            )}
           
        </div>
            {btn &&  <button className='btn1'>SEE ALL</button> }
    </div>
  )
}

export default Creation