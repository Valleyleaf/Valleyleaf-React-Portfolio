import React from 'react';
import { useState } from "react";
import './contact.css'
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

//Note to self. Below can be used for shortened components. When including functions, export seperately.
export default function Contact(){
  return (
    <>
      <div className='contactMe'>
        <div>
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

