import React from 'react';
import {projectTitle, projectText, projectImage, projectRepoLink, projectDeployLink} from '../../utils/projectContent'
import './portfolio.css'
import deployIcon from '../../assets/img/link-alt-1-svgrepo-com.svg';
import repoIcon from '../../assets/img/inbox-alt-1-svgrepo-com.svg';

function PortfolioMain() {
  const renderItems = () => {
    return projectImage.map((renderBG, index) => (
      <div 
      key={index} 
      className='projectSlidePassive'
      style={{ 
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${renderBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: '4'
      }}
      >
          <div className='projectContainer'>
          <div className='projectBox'>
          <h2>{projectTitle[index]}</h2>
          <p>{projectText[index]}</p>
          </div>
          <div className="repoBox">
            <a href={projectRepoLink[index]} target="_blank"><img className='deployandrepo' src={repoIcon} alt="Link to repo"/></a>
            <a href={projectDeployLink[index]} target="_blank"><img className='deployandrepo' src={deployIcon} alt="Link to Deployed project" /></a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className='flex-container-column'>
        <h2 className='flex-container-row center-content'>Projects</h2>
        <div className='flex-container-row center-content'>
          {renderItems()}
        </div>
    </div>
  );
}

export default PortfolioMain;