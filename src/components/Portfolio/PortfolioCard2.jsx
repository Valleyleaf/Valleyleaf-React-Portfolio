import { useState } from "react";
import React from 'react';
import { slideTitle, slideContent, slideLink, slideRepo} from '../../utils/slideContent';
import slide from '../../assets/img/Project1ExampleImage.png';
import deployIcon from '../../assets/img/link-alt-1-svgrepo-com.svg';
import repoIcon from '../../assets/img/inbox-alt-1-svgrepo-com.svg';

import './portfolio.css'

const projectSlide = 1;

export default function PortfolioItem2(){

  const backgroundImageStyle = {
    backgroundImage: `url(${slide})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };


    return (
        <div style={backgroundImageStyle} className="flex-container-row gradient-overlay fade-in">
          
        <div id="outerFrame" className='center-content flex-container-row'>
          <div>
            <h2 className="keepLeft content-Text">{slideTitle[projectSlide]}</h2>
            <p className="keepRight content-Text noWrap">{slideContent[projectSlide]}</p>
          </div>
        </div>
        
          <div id="innerFrameBottom" className="flex-container">
            <a href={slideRepo[projectSlide]} target="_blank"><img className='deployandrepo' src={repoIcon} alt="Link to repo"/></a>
            <a href={slideLink[projectSlide]} target="_blank"><img className='deployandrepo' src={deployIcon} alt="Link to Deployed project" /></a>
          </div>
      </div>
    );
  }



