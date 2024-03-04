import React from 'react';
import linkedinButton from '../../assets/img/linkedin-fill-svgrepo-com.svg'
import twitterButton from '../../assets/img/twitter-fill-svgrepo-com.svg'
import gitHubButton from '../../assets/img/github-fill-svgrepo-com.svg'
import './header.css'

export default function Header(){
    return (
      <div>
        <div className='Header-Top flex-container-row mainColor'>
          <div>
            <h2>Aston Andersson Dahllöf</h2>
          </div>

          <div className='keepRight center-content'>
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
        </div>
      </div>
    );
  }