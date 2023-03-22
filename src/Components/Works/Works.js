import React, { useState } from 'react';
import './Works.css';
import details from './Data.js';
import {Link} from 'react-scroll';

export function Works() {
    const [isOpen,SetisOpen] = useState(true);
    const [schIsOpen,schSetisOpen] = useState(false);
    return(
        
        <div className='container' id='Works-in'>
        <div className='Works'>
            <span>About Me</span>
            <span>Why choose Me?</span>
            <span>{details.choose_me}</span>
        </div>
        <div class="details">
        <div className='icons'>
        <i class="fa fa-book"  onClick={()=>
            {SetisOpen(true);
                schSetisOpen(false);
        }}></i>
        <i class="fa fa-graduation-cap" onClick={()=>
            {
                schSetisOpen(true);
                SetisOpen(false);     
        }}></i>
        </div>
           { isOpen && <div class="Process">
                <div class="progress-bar">
                    <label for="file" className='tag'>{details.program.c.name}</label>
                        <progress id="file" value={details.program.c.value} max="100"> </progress>
                </div>
                <div class="progress-bar">
                    <label for="file">{details.program.java.name}</label>
                        <progress id="file"  value={details.program.java.value} max="100"> </progress>
                </div>
                <div class="progress-bar">
                    <label for="file">{details.program.python.name}</label>
                        <progress id="file" value={details.program.java.value} max="100"></progress>
                </div> 
            </div> }
            { schIsOpen  && <div className='book'>
                <div className='hsc'>
                    <label>HSC :</label>
                    <label>{details.studies.hsc.name}</label>
                    <label>{details.studies.hsc.percentage}</label>
                </div>
                <div className='hsc'>
                    <label>SSC :</label>
                    <label>{details.studies.ssc.name}</label>
                    <label>{details.studies.ssc.percentage}</label>
                </div>
                
                </div>
                }
        </div>
            <button className='button a-button'>Hire me</button>
        </div>
    );
} 