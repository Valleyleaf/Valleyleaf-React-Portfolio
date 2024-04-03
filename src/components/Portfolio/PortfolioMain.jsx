import React from 'react';
import {projectTitle, projectText, projectImage, projectRepoLink, projectDeployLink} from '../../utils/projectContent'
import './portfolio.css'

function PortfolioMain() {
  const renderItems = () => {
    return projectImage.map((renderBG, index) => (
      <div 
      key={index} 
      className='projectSlidePassive flex-container-columns center-content'
      style={{ 
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${renderBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: '4'
      }}
      >
          <h2 className='projectText'>{projectTitle[index]}</h2>
          <div className='flexPortfolioWindow'>
            <p className='projectText'>{projectText[index]}</p>
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
