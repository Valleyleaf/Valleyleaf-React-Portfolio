import React from 'react';
import { useState } from "react";

export default function Footer(){
    return (
      <div className='flex-container center-content flex-container-columns'>
        <p>Copyright Aston Andersson Dahllof 2023©</p>
        <div className='flex-container center-content flex-container-row' >
          
          <a href="https://www.linkedin.com/in/aston-andersson-dahllof-b4310ab5/" target="_blank">
          <img src="/src//assets/Placeholder Image.png" alt="link to linkedin" />
          </a>

          <a href="https://github.com/Valleyleaf" target="_blank">
          <img src="/src//assets/Placeholder Image.png" alt="link to github" />
          </a>

          <a href="https://twitter.com/ValleyleafSys" target="_blank">
          <img src="/src//assets/Placeholder Image.png" alt="link to Twitter" />
          </a>
        </div>
      </div>
    );
  }