import { useState } from "react";
import React from 'react';
import { slideTitle, slideContent, slideLink, slideRepo} from '../../utils/slideContent';
import slide from '../../assets/img/moodMusicExample.png';
import deployIcon from '../../assets/img/link-alt-1-svgrepo-com.svg';
import repoIcon from '../../assets/img/inbox-alt-1-svgrepo-com.svg';
import './Portfolio.css'

import slide0 from '../../assets/img/moodMusicExample.png';
import slide1 from '../../assets/img/Project1ExampleImage.png';
import slide2 from '../../assets/img/javapswgenerator.png';
import slide3 from '../../assets/img/FourCatering.jpg';
import slide4 from '../../assets/img/NoteTaker.png';
import slide5 from '../../assets/img/svg.png';

const slideImage = [
  slide0,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5
]

const slideValue = 0;

export default function PortfolioItem1(){
  const items = [0, 1, 2, 3, 4];

  const backgroundImageStyle = {
    backgroundImage: `url(${slideImage[slideValue]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

    return (
        
      <div className="flex-container-row projectSlidePassive">

      {/* Loop through the items array and render a div for each element */}
      {items.map((items) => (
        <div key={items}>
          

          <div style={backgroundImageStyle} className="flex-container-row gradient-overlay fade-in">
          
          <div id="outerFrame" className='center-content flex-container-row'>
            <div>
              <h2 className="keepLeft content-Text">{slideTitle[slideValue]}</h2>
              <p className="keepRight content-Text noWrap">{slideContent[slideValue]}</p>
            </div>
          </div>
            <div id="innerFrameBottom" className="flex-container">
              <a href={slideRepo[slideValue]} target="_blank"><img className='deployandrepo' src={repoIcon} alt="Link to repo"/></a>
              <a href={slideLink[slideValue]} target="_blank"><img className='deployandrepo' src={deployIcon} alt="Link to Deployed project" /></a>
            </div>
        </div>

        </div>
      ))}
    </div>
  );
};




