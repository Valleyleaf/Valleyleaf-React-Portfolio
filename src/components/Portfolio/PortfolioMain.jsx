import React, { useState, useEffect } from 'react';
import {projectTitle, projectText, projectImage, projectRepoLink, projectDeployLink} from '../../utils/projectContent'
import './portfolio.css'


function PortfolioMain() {
  const renderItems = () => {

    return projectImage.map((projectImage, index) => (
      <div key={index} className='projectSlidePassive'>
          
          <div className='flex-container-row center-content'>
            <h2 className=''>{projectTitle[index]}</h2>
          </div>
        <img className='' src={projectImage} alt="Project Background" />
        <p className=''>{projectText[index]}</p>
      </div>
    ));
  };

  return (
    <div className='flex-container-column'>
        <h2 className='flex-container-row center-content'>Projects</h2>
        <div 
          className='flex-container-row center-content'
          style={{ backgroundImage: 'url(' + projectImage + ')', backgroundSize: 'auto'}}>
          {renderItems()}
        </div>
    </div>
  );
}

export default PortfolioMain;
