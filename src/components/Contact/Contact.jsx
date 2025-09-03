import React from 'react';
import { useState } from "react";
import './contact.css'
import ContactForm from './ContactForm';

//Note to self. Below can be used for shortened components. When including functions, export seperately.
export default function Contact(){
  return (
    <div className='contactMe'>
      <div className='flexColumn'>
        <div>
          <h2 className='typewriterClassContact'>Contact Me</h2>
        </div>
        <div className='flexColumn fade-in'>
          {ContactForm()}
        </div>
      </div>
    </div>
  );
};

