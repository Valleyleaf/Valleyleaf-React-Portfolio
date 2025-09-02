import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './navbar.css';

const categoryBar = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Stack', path: '/stack' },
  { name: 'Contact', path: '/contact' }
];

export default function Navigation() {
  const location = useLocation();

  return (
    <div className='Navigation'>
      {categoryBar.map((category, index) => {
        const isActive = location.pathname === category.path;
        return (
          <Link
            key={index}
            to={category.path}
            className={`nav-Button${isActive ? ' nav-active' : ''}`}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}

