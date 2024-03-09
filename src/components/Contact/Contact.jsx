import React from 'react';
import { useState } from "react";
import './contact.css'
import ContactForm from './ContactForm';
import socialMedia from './socialMedia';

//Note to self. Below can be used for shortened components. When including functions, export seperately.
export default function Contact(){
  return (
    <div>
      <div className='flex-container-columns center-content'>
        <div className='flexBox3'>
          <h2 className='HeadTextClass typewriterClassContact'>Contact Me</h2>
        </div>
        <div className='contactMe flex-container-columns fade-in'>
          {ContactForm()}
          {socialMedia()}
        </div>
      </div>
    </div>
  );
};

