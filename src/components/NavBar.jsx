import React from 'react';
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

export default function NavBar(){
  const currentPage = useLocation().pathname;
    // console.log('NavBar Activated')
    return (
      <div>
        <nav>
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          
        >
          About Me
          
        </Link>
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
        </nav>
      </div>
    );
  }

  //Reminder, make nav-link active and nav-link stylings for later