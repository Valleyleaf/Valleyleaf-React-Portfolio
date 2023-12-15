import React from 'react';
import { useState } from "react";

export default function Footer(){
    return (
      <div className='flex-container center-content flex-container-columns header-Styling'>
        
        <div className='flex-container center-content flex-container-row' >
          
          <a href="https://www.linkedin.com/in/aston-andersson-dahllof-b4310ab5/" target="_blank">
          <img className='small-img' src="/src//assets/LinkedinButton.png" alt="link to linkedin" />
          </a>

          <a href="https://github.com/Valleyleaf" target="_blank">
          <img className='small-img' src="/src//assets/GithubButton.png" alt="link to github" />
          </a>

          <a href="https://twitter.com/ValleyleafSys" target="_blank">
          <img className='small-img' src="/src//assets/TwitterButton.png" alt="link to Twitter" />
          </a>
        </div>
        <p className='header-Text'>Copyright Aston Andersson Dahllof 2023©</p>
      </div>
    );
  }