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
                <div className='about'>
                <div className='name-div'>
                <span className='name'>jayakumar112234@gmail.com</span>
                </div>
                <div className='self-contact'>
                <span className='contact'>(91+) 8610239688</span>
                </div>
                <div className='self-location'>
                    <span className='contact'>Tiruchengode</span>
                </div>
                </div>
                <div className='f-icons'>
                <a href='https://instagram.com/jayakumar8113?igshid=ZDdkNTZiNTM=' target='blank' ><Insta color='var(--black)' size='3rem'></Insta></a>
                <a href='https://www.facebook.com/profile.php?id=100014515151690&mibextid=ZbWKwL' target='blank' ><Facebook color='var(--black)' size='3rem'></Facebook></a>
                <a href='https://github.com/JayaKumar-2003?tab=packages' target='blank'> <Github color='var(--black)' size='3rem'></Github></a>
                </div>
            </div>
        </div>
    );
}