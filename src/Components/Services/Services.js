import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../../Components/Card/Card.js';
import Resume from './Eunimart-Resume.pdf';
export function Services () {
    return(
        <div className='services1' id='Services'>
            {/* leftside */}
            <div className='awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>Check my Resume</span>
                <div className='button-one'>
                <a href={Resume} className='resume'  download ><button className='button s-button' value='Download CV'>Download cv
                </button></a></div>

                <div className='blur s-blurl' style={{backgrouund:"#ABF1FF94"}}></div>
            </div>
            {/* rightside */}
            <div className='right-main'>
            <div className='st-card'>
                <Card emoji={HeartEmoji} 
                 heading={'Design'}
                 detail={"Figma,UI/Ux,Adobe"}
                />
            </div>
            <div className='nd-card' >
                <Card emoji={Glasses} 
                 heading={"Developer"}
                 detail={"Html,Css,React,MERN"}
                />
            </div>
            <div className="rd-card">
                <Card emoji={Humble} 
                 heading={"Deoper"}
                 detail={"Html,Css,React,MERN"}
                />
            </div>
            </div>
         </div>
    );
}