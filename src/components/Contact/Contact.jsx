import React from 'react';
import { useState } from "react";
import './contact.css'
import ContactForm from './ContactForm';
import socialMedia from './socialMedia';

//Note to self. Below can be used for shortened components. When including functions, export seperately.
export default function Contact(){
  return (
    <div>
      <div className='flex-container-columns center-content fade-in'>
      <h2>Contact Me</h2>
        <div className='contactMe flex-container-columns'>
          {ContactForm()}
          {socialMedia()}
        </div>
      </div>
    </div>
  );
};

{/* <a className='emailMeButton' href="mailto:aston_dahllof@outlook.com">
Email me!
</a> */}