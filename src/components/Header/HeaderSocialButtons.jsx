import React from 'react';
import linkedinButton from '../../assets/img/linkedin-fill-svgrepo-com.svg'
import twitterButton from '../../assets/img/twitter-fill-svgrepo-com.svg'
import gitHubButton from '../../assets/img/github-fill-svgrepo-com.svg'
import '../../assets/css/header.css'


function headerButtons() {
  const buttons = [
    {
      href: "https://www.linkedin.com/in/aston-andersson-dahllof-b4310ab5/",
      img: linkedinButton,
      alt: "link to linkedin"
    },
    {
      href: "https://github.com/Valleyleaf",
      img: gitHubButton,
      alt: "link to github"
    },
    {
      href: "https://twitter.com/ValleyleafSys",
      img: twitterButton,
      alt: "link to Twitter"
    }
  ];
  return (
    <div className='buttonsContainer'>
      {buttons.map(({ href, img, alt }, idx) => (
        <a href={href} target="_blank" rel="noopener noreferrer" key={href}>
          <img className='socialButtons' src={img} alt={alt} />
        </a>
      ))}
    </div>
  );
}

export default function headerSocialButtons(){
    return (
      <div>
            {headerButtons()}
      </div>
    );
  }