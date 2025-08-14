import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
      <div className=''>
        <nav className=''>
          <div className=''>
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-active' : 'nav-link'}
          onClick={handleLinkClick}
        >
          About Me
        </Link>
        </div>
        
        <div className=''>
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-active' : 'nav-link'}
          onClick={handleLinkClick}
        >
          Portfolio
        </Link>
        </div>
        <div className=''>
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-active' : 'nav-link'}
          onClick={handleLinkClick}
        >
          Contact
        </Link>
        </div>
        <div className=''>
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-active' : 'nav-link'}
          onClick={handleLinkClick}
        >
          Resume
        </Link>
        </div>
        <div className=''>
        <Link
          to="/Art"
          className={currentPage === '/Art' ? 'nav-active' : 'nav-link'}
          onClick={handleLinkClick}
        >
          Art & Design
        </Link>
        </div>
        </nav>
      </div>
    );
  }

  //Make renderer function with map.