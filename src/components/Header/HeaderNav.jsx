import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/nav.css'

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
      <div>
        <nav className='navbar'>
          <div className=''>
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-active' : 'navButton'}
          onClick={handleLinkClick}
        >
          About Me
        </Link>
        </div>
        
        <div className=''>
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-active' : 'navButton'}
          onClick={handleLinkClick}
        >
          Portfolio
        </Link>
        </div>
        <div className=''>
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-active' : 'navButton'}
          onClick={handleLinkClick}
        >
          Contact
        </Link>
        </div>
        <div className=''>
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-active' : 'navButton'}
          onClick={handleLinkClick}
        >
          Resume
        </Link>
        </div>
        </nav>
      </div>
    );
  }

  //Make renderer function with map.