import React from 'react';
import { useState } from "react";
// import { Document } from 'react-pdf'

export default function Resume(){
    return (
      <div>
        <div className='flex-container center-content flex-container-columns'>
          <h2>Resume</h2>
          <div>
          <p>Feel free to download my resume below.</p>
          <img className='small-img' src="/src//assets/pdfimage.png" alt="PlaceholderImage" />
          <a href="https://drive.google.com/file/d/1s18svdfbGZAs4NlCMWq162Qr82qUfiOW/view?usp=sharing">Download</a>
          </div>

        </div>
      </div>
    );
  }