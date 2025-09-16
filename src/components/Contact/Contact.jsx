import React from 'react';
import './contact.css'
import retroLogo from '../../assets/img/retroLogo.svg'
import SocialMedia from './SocialMedia.jsx';  
import ContactForm from './ContactForm';

//Note to self. Below can be used for shortened components. When including functions, export seperately.
export default function Contact(){
  return (
    <>
      <div className='contactMe'>
        <div className='flexRow'>
          <h2 className='contactText'>Contact Me</h2>
        </div>
        <div className='formContainer fade-in'>
          {ContactForm()}
        </div>
          {SocialMedia()}
      </div>
    </>
  );
};

