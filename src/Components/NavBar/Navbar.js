import React, { useState } from 'react';
import { Toggle } from '../Toggle/Toggle';
import './Navbar.css';
import {Link} from 'react-scroll';

// import { Services } from '../Services/Services';
// import { Contact } from '../Contact/Contact';
// import { Works } from '../Works/Works';

export function Navbar() {
    const [isOpen,setisOpen]= useState(false);
    
    return(
        // Navbar
        <div className='nav-main'>
           <div className='nav-left'>
                <a href='/'>PortFolio</a>
                <Toggle></Toggle>
           </div>
          <div className='collapse' onClick={()=>setisOpen(!isOpen)}>
              <i class="fa-solid fa-bars"></i>
              {isOpen && <div className='collapse1'>
                        <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                        <span>Services</span>
                        </Link>
                        <Link spy={true} to='Works' smooth={true} activeClass='activeClass'>
                        <span>About me</span>
                        </Link>
                        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                       <span>Contact</span>
                        </Link>
                </div>}
          </div>
           <div className='nav-right'>
                <div className='nav-list'>
                    <ul style={{listStyleType:'none'}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                        <li>Service</li>
                        </Link>
                        <Link spy={true} to='Works' smooth={true} activeClass='activeClass'>
                        <li>About me</li>
                        </Link>
                        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                        <li>Contact</li>
                        </Link>
                    </ul>
                </div>
                <button className='button'>Contact</button>
           </div>
           </div>
        
    );
}