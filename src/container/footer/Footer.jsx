import React from 'react'
import './footer.css'
import { Facebook, Instagram, Pinterest, Twitter } from '../../images';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

      return (
    <div className="footer section__padding">
        <div className="footer__right">
        <div className="logo">
                <h1>loopstudios</h1>
            </div>
            <div className="menu">
            <a href="" className=' links active'>About</a>
                <a href="" className='links active'>Careers </a>
                <a href="" className='links active'>Events</a>
                <a href="" className='links active'>Products</a>
                <a href="" className='links active' >Support</a>
            </div>
        </div>
        <div className="footer__left">
            <div className="icons">
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
                <img src={Pinterest} alt="" />   
                <img src={Instagram} alt="" />
            </div>
                <h5> &copy; {year} Loopstudios. All Rights Reserved</h5>
        </div>

    </div>
  )
}

export default Footer