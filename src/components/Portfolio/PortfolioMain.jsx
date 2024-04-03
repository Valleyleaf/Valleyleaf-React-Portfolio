import React from 'react';
import {projectTitle, projectText, projectImage, projectRepoLink, projectDeployLink} from '../../utils/projectContent'
import './portfolio.css'


function PortfolioMain() {
  const renderItems = () => {
    return projectImage.map((image, index) => (
      <div 
      key={index} 
      className='projectSlidePassive'
      style={{ 
        backgroundImage: `url(${projectImage[index]})`,
        backgroundSize: 'auto',
        zIndex: '0'
      }}
      >
        
          <div className='flex-container-row center-content'>
            <h2>{projectTitle[index]}</h2>
          </div>
        <p>{projectText[index]}</p>
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
