import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Topper from './Topper.jsx';
import Navigation from './Navigation.jsx';
import './navbar.css';

export default function NavBar(){
    const currentPage = useLocation().pathname;

  const handleLinkClick = (event) => {
    document.querySelectorAll('nav').forEach(link => {
      link.className.remove('nav-active');
    });
    event.target.className.add('nav-active');
  };
    return (
      <div className='navMain'>
        <Topper/>
        <Navigation/>
      </div>
    );
  }