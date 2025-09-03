import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './navbar.css';

const categoryBar = [
  { name: 'about', path: '/about' },
  { name: 'projects', path: '/projects' },
  { name: 'stack', path: '/stack' },
  { name: 'contact', path: '/contact' }
];

export default function Navigation() {
  const location = useLocation();

  return (
    <div className='Navigation'>
      {categoryBar.map((category, index) => {
        const isActive = location.pathname === category.path;
        return (
          <Link key={index} to={category.path} className={`nav-Button${isActive ? ' nav-active' : ''}`}>
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}

