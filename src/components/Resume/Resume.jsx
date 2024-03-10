import React from 'react';
import pngimage from '../../assets/img/pdf-document-svgrepo-com.svg';
import './resume.css'
import jobOne from './jobOne.jsx'
import jobTwo from './jobTwo.jsx'
import jobThree from './jobThree.jsx'
import jobFour from './jobFour.jsx'
import skillsOne from './skillsOne.jsx'

export default function Resume(){
    return (
      <>
        <div className='flex-container-columns center-content fade-in'>
          <div className='flexBox3'>
            <h2 className='typewriterClassResume'>Resume</h2>
          </div>
          <div className='divider-Top'>
            <div>{skillsOne()}</div>
            <div>{jobOne()}</div>
            <div>{jobTwo()}</div>
            <div>{jobThree()}</div>
            <div>{jobFour()}</div>
          <p>Interested in hiring me? Find my full resume for download below</p>
          </div>
          <img className='mini-img' src={pngimage} alt="Download Resume" />
          <a className='flex-container center-content downloadButton' href="https://drive.google.com/file/d/1_aUBoJIAii3fql7Fq8tXlXF49ZRR4hTJ/view?usp=sharing">Download</a>
        </div>
      </>
    );
  }