import React from 'react'
import './interact.css'
import { Image__interact, Mob__Image__interact } from '../../images'


const Interact = () => {
  return (
    <div className="interact section__padding">
        <div className="interact__content">
            <img src={Image__interact} alt="" />
            <div className="interact__info">
                <h5>the leader in  interactive vr</h5>
                <p>Founded in 2011, Loopstudios has been producing word-class  virtual reality project for some of the best countries around globe. Our award-winning creations has transformed business through digital experience that bind to their brand. </p>
            </div>
        </div>
    </div>
  )
}

export default Interact