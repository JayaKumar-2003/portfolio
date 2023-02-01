import React from 'react';
import './Works.css';
import details from './Data.js';
export function Works() {
    return(
        <div className='container' id='Works-in'>
        <div className='Works'>
            <span>About Me</span>
            <span>Why choose Me?</span>
            <span>{details.choose_me}</span>
        </div>
        <div className='Works-down'>
                <ul>
                    <li><span>{details.c_program.names}</span></li>
                    <li><span>React js</span></li>
                    <li><span>HTML,CSS,JAVASCRIPT</span></li>
                    <li><span>MySQL</span></li>
                    <li><span>MERN Stack</span></li>
                </ul>
            </div>
            <button className='button a-button'>Hire me</button>
        </div>
    );
} 