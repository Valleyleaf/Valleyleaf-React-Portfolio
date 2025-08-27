import React from 'react';
import linkedinIcon from '../../assets/img/linkedin-fill-svgrepo-com.svg'
import twitterIcon from '../../assets/img/twitter-fill-svgrepo-com.svg'
import gitHubIcon from '../../assets/img/github-fill-svgrepo-com.svg'
import './contact.css'

const socialMediaLinks = [
  {
    href: "https://www.linkedin.com/in/aston-andersson-dahllof-b4310ab5/",
    imgSrc: linkedinIcon,
    alt: "link to linkedin"
  },
  {
    href: "https://github.com/Valleyleaf",
    imgSrc: gitHubIcon,
    alt: "link to github"
  },
  {
    href: "https://twitter.com/ValleyleafSys",
    imgSrc: twitterIcon,
    alt: "link to Twitter"
  }
];

export default function socialMedia(){
    return (
      <div>
        <div className='flex-container-columns center-content fade-in'>
          <div className='flex-container-columns center-content'>
              <div className='flex-container-row'>
                {socialMediaLinks.map((link, index) => (
                  <a key={index} href={link.href} target="_blank">
                    <img className='small-img' src={link.imgSrc} alt={link.alt} />
                  </a>
                ))}
              </div>
          </div>
        </div>
      </div>
    );
  };

  //Is having this in a seperate file justified? Don't care.
