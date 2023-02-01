import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png'; 
import Vector1 from '../../img/Vector1.png'; 
import Vector2 from '../../img/Vector2.png'; 
import boy from '../../img/boy1.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../../Components/FloatingDiv/FloatingDiv.js';
export function Intro() {
    return(
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hy! I am</span>
                    <span>JayaKumar</span>
                    <span>Frontend Developer with high level of knowledge</span>
                </div>
                <div className='button-m'>
                <button className='button'>Hire me</button>
                </div>
                <div className='i-icons'>
                    <a href='https://github.com/JayaKumar-2003?tab=packages' target='blank'> <img src={Github} alt=""></img></a>
                    <a href='https://www.linkedin.com/in/jayakumar-s-7a11a321a/' target='blank'> <img src={Linkedin} alt=""></img></a>  
                </div>
            </div>
            <div className='i-right'>
                  <img src={Vector1} alt=''></img>
                  <img src={Vector2} alt=''></img>
                  <img src={boy} alt='' ></img>
                  <img src={glassesimoji} alt=""></img>
                  <div className='first-card' >
                  <FloatingDiv image={Crown} txt1='Web' txt2='Developer' className='floating-div'></FloatingDiv>
                  </div>
                  <div className='second-card'>
                    <FloatingDiv image={thumbup} txt1='Best' txt2='Designer' className='floating-div'></FloatingDiv>
                  </div>
                  <div className='blur' style={{background:'rgb(238 210 255'}}>
                  </div>
                  <div className='blur' style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
            </div>
        </div>
    );
}