import React,{useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

import {useRef} from 'react';
export function Contact () {
    const form = useRef();
    const [done,setDone]=useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ewxi8s9', 'template_f4aynlt', form.current, 'HgHilNNOXXoRC7E2u')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div className='contact-form' id='Contact'>
            <div className='w-left'>
                <div className='awesome'>
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className='blur s-blurl' style={{background:"#ABF1FF94"}}>
                    </div>
                </div>
            </div>
            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name'></input>
                    <input type="email" name='user_email' className='user' placeholder='Email'></input>
                    <textarea name='message' className='user' placeholder='Message'></textarea>
                    <input type="submit" value="Send" className='button button-one-class' ></input> 
                    <span>{done &&"Thanks for contacting me"}</span>
                    <div className='blur c-blurl' style={{background:"var(--purple)"}}>
                    </div>
                </form>

            </div>
        </div>
    );
}