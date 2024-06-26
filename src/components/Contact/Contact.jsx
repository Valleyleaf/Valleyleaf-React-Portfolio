import React from 'react';
import { useState } from "react";
import './contact.css'
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

//Note to self. Below can be used for shortened components. When including functions, export seperately.
export default function Contact(){
  return (
    <div className='contactMe'>
      <div className='flex-container-columns main-content-scaling'>
        <div className='flexBox3'>
          <h2 className='HeadTextClass typewriterClassContact'>Contact Me</h2>
        </div>
        <div className='flex-container-columns fade-in'>
          {ContactForm()}
          {SocialMedia()}
        </div>
      </div>
    </div>
  );
};

