import React from 'react';
import { useState } from "react";
import { Document } from 'react-pdf'

export default function Resume(){
    return (
      <div>
        <div className='flex-container center-content flex-container-columns'>
          <h2>Resume</h2>
          <div>
          <a href="https://drive.google.com/file/d/1s18svdfbGZAs4NlCMWq162Qr82qUfiOW/view?usp=sharing">Download</a>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    );
  }