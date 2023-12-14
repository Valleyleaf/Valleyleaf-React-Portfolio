import React from 'react';
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

export default function NavBar(){
  const currentPage = useLocation().pathname;
    // console.log('NavBar Activated')
    return (
      <div className='flex-container flex-container-columns'>
        <nav className='flex-container flex-container-row'>
          <div className='nav-Button'>
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          
        >
          About Me
          
        </Link>
        </div>
        <div className='nav-Button'>
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
        </div>
        <div className='nav-Button'>
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
        </div>
        <div className='nav-Button'>
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
        </div>
        </nav>
        <div className='header-divider'>
        
        </div>
      </div>
    );
  }

  //Reminder, make nav-link active and nav-link stylings for later