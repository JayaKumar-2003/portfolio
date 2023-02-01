import React from 'react';
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Wave from '../../img/wave.png';
export function Footer() {
    return (
        <div className='footer'>
            <img src={Wave} alt=''></img>
            <div className='f-content'>
                <span className='name'>jayakumar112234@gmail.com</span>
                <div className='f-icons'>
                    <Insta color='white' size='3rem'></Insta>
                    <Facebook color='white' size='3rem'></Facebook>
                    <Github color='white' size='3rem'></Github>
                </div>
            </div>
        </div>
    );
}