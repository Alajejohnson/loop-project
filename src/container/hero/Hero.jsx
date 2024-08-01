import React from 'react'
import './hero.css'
import { useState } from 'react'
import { Close, Hamburger } from '../../images';

const Hero = () => {
   const [toggle, setToggle] = useState(false);
  return (
    <div className='hero section__padding'>
        <nav>
            <div className="logo">
                <h1>loopstudios</h1>
            </div>
            <div className="menu">
                <a yhref="" className=' links active'>About</a>
                <a href="" className='links active'>Careers </a>
                <a href="" className='links active'>Events</a>
                <a href="" className='links active'>Products</a>
                <a href="" className='links active' >Support</a>
            </div>
            
        {toggle ? <img src={Close} onClick={()=> setToggle(false)} className='icon ' /> : <img src={Hamburger} onClick={()=> setToggle(true)} className='icon'  />  }
            {toggle && 
                <div className="menus slide-in-right ">
                    <div className="menu__links">
                    <a href="" className=' links active'>About</a>
                <a href="" className='links active'>Careers </a>
                <a href="" className='links active'>Events</a>
                <a href="" className='links active'>Products</a>
                <a href="" className='links active' >Support</a>
                    </div>
            </div>
            }
            
            
        </nav>
        
        <div className="hero__container">
            <h5>immersive experience  that deliver</h5>
        </div>

    </div>

        
  )
}

export default Hero