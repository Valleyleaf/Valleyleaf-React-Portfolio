import React from 'react';
import { useState } from "react";
import ContactForm from './ContactForm';
import socialMedia from './socialMedia';

//Note to self. Below can be used for shortened components. When including functions, export seperately.
export default function Contact(){
  return (
    <div>
      <div className=''>
      <h2 className=''>Contact Me</h2>
        <div className=''>
          {ContactForm()}
          {socialMedia()}
        </div>
      </div>
    </div>
  );
};

