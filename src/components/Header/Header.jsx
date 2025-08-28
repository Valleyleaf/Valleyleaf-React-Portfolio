import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import linkedinButton from '../../assets/img/linkedin-fill-svgrepo-com.svg'
import twitterButton from '../../assets/img/twitter-fill-svgrepo-com.svg'
import gitHubButton from '../../assets/img/github-fill-svgrepo-com.svg'
import './header.css'

export default function Header(){
  const currentPage = useLocation().pathname;

  const handleLinkClick = (event) => {
    document.querySelectorAll('nav').forEach(link => {
      link.className.remove('nav-active');
    });
    event.target.className.add('nav-active');
  };
    return (
      <div>
        <div className='Header-Top'>
        <Link
          to="/"
          className='header-Text'
          onClick={handleLinkClick}
        >
          <div className='flex-container-columns'>
          <h2 className='header-Size'>Aston Andersson Dahllof</h2>
          <h4 className='workTitle'>-Full-Stack Web Developer-</h4>
          </div>
        </Link>
        </div>
      </div>
    );
  }