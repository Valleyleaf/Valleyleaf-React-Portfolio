import React from 'react';
import linkedinButton from '../../assets/img/linkedinButton.png'
import twitterButton from '../../assets/img/TwitterButton.png'
import gitHubButton from '../../assets/img/GithubButton.png'
import './footer.css'


export default function Footer(){
    return (
      <div className='center-content flex-container-columns header-Styling'>
        
        <div className='center-content flex-container-row' >
          
          <a href="https://www.linkedin.com/in/aston-andersson-dahllof-b4310ab5/" target="_blank">
          <img className='small-img' src={linkedinButton} alt="link to linkedin" />
          </a>

          <a href="https://github.com/Valleyleaf" target="_blank">
          <img className='small-img' src={gitHubButton} alt="link to github" />
          </a>

          <a href="https://twitter.com/ValleyleafSys" target="_blank">
          <img className='small-img' src={twitterButton} alt="link to Twitter" />
          </a>
        </div>
        <p>Copyright Aston Andersson Dahllof 2023©</p>
      </div>
    );
  }