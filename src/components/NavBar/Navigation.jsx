import React from 'react';
import './navbar.css';

const categoryBar = [
  { name: 'About', id: 'aboutMeRef' },
  { name: 'Stack', id: 'stackRef' },
  { name: 'Projects', id: 'portfolioRef' },
  { name: 'Contact', id: 'contactRef' }
];

export default function Navigation() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="Navigation">
      {categoryBar.map(({ name, id }) => (
        <button
          key={id}
          className="nav-Button"
          onClick={() => scrollToSection(id)}
        >
          {name}
        </button>
      ))}
    </nav>
  );
}
