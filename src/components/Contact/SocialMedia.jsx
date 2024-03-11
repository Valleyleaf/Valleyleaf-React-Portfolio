import React from 'react';
import linkedinIcon from '../../assets/img/linkedin-fill-svgrepo-com.svg'
import twitterIcon from '../../assets/img/twitter-fill-svgrepo-com.svg'
import gitHubIcon from '../../assets/img/github-fill-svgrepo-com.svg'
import './contact.css'


export default function socialMedia(){
    return (
      <div>
        <div className='flex-container-columns center-content fade-in'>
          <div className='flex-container-columns center-content'>
              <div className='flex-container-row'>
              <a href="https://www.linkedin.com/in/aston-andersson-dahllof-b4310ab5/" target="_blank">
                <img className='small-img' src={linkedinIcon} alt="link to linkedin" />
                </a>
                <a href="https://github.com/Valleyleaf" target="_blank">
                <img className='small-img' src={gitHubIcon} alt="link to github" />
                </a>
                <a href="https://twitter.com/ValleyleafSys" target="_blank">
                <img className='small-img' src={twitterIcon} alt="link to Twitter" />
                </a>
              </div>
              <p className=' flex-container'>Or find me on social media.</p>
          </div>
        </div>
      </div>
    );
  };
