import React from 'react';
import deployIcon from '../../assets/img/link-alt-1-svgrepo-com.svg';
import repoIcon from '../../assets/img/inbox-alt-1-svgrepo-com.svg';
import './portfolio.css';

function ProjectCard({ title, textContent, image, repoLink, deployLink }) {
  return (
    <article 
      className="projectSlidePassive"
      style={{ 
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 4
      }}
    >
      <div className="projectContainer">
        <header className="projectBox">
          <h2>{title}</h2>
          <p>{textContent}</p>
        </header>
        <div className="repoBox">
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <img className="deployandrepo" src={repoIcon} alt="Link to repo" />
          </a>
          <a href={deployLink} target="_blank" rel="noopener noreferrer">
            <img className="deployandrepo" src={deployIcon} alt="Link to Deployed project" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
