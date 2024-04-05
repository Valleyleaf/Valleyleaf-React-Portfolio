import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

export default function NavBar(){
    const currentPage = useLocation().pathname;

  const handleLinkClick = (event) => {
    document.querySelectorAll('nav').forEach(link => {
      link.className.remove('nav-active');
    });
    event.target.className.add('nav-active');
  };
// Divider
    return (
      <div className='flex-container-columns'>
        <nav className='flex-container-row'>
          <div className='nav-Button'>
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-active' : 'nav-link'}
          onClick={handleLinkClick}
        >
          About Me
        </Link>
        </div>
      
        <div className='nav-Button'>
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-active' : 'nav-link'}
          onClick={handleLinkClick}
        >
          Contact
        </Link>
        </div>
        <div className='nav-Button'>
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-active' : 'nav-link'}
          onClick={handleLinkClick}
        >
          Resume
        </Link>
        </div>
        {/* <div className='nav-Button'>
        <Link
          to="/WIPs"
          className={currentPage === '/WIPs' ? 'nav-active' : 'nav-link'}
          onClick={handleLinkClick}
        >
          Works in Progress
        </Link>
        </div> */}
        {/* <div className='nav-Button'>
        <Link
          to="/Art"
          className={currentPage === '/Art' ? 'nav-active' : 'nav-link'}
          onClick={handleLinkClick}
        >
          Skills & Roadmap
        </Link>
        </div> */}
        </nav>
      </div>
    );
  }

  //Reminder, make nav-link active and nav-link stylings for later