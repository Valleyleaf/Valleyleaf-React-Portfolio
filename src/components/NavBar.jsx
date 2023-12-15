import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar(){
    const currentPage = useLocation().pathname;

  const handleLinkClick = (event) => {
    document.querySelectorAll('nav').forEach(link => {
      link.className.remove('nav-active');
    });
    event.target.className.add('nav-active');
    console.log('WHY THIS NO WORK []')
  };
// Divider
    return (
      <div className='flex-container flex-container-columns'>
        <nav className='flex-container flex-container-row'>
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
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-active' : 'nav-link'}
          onClick={handleLinkClick}
        >
          Portfolio
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
        </nav>
        {/* <div className='header-divider'></div> */}
      </div>
    );
  }

  //Reminder, make nav-link active and nav-link stylings for later
  //The function above does not work. It doesn't interupt anything atm, but fix in future.