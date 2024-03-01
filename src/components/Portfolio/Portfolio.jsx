import { useState } from "react";
import React from 'react';
import { slideTitle, slideContent, slideLink, slideRepo} from '../../utils/slideContent';
import slide0 from '../../assets/img/moodMusicExample.png';
import slide1 from '../../assets/img/Project1ExampleImage.png';
import slide2 from '../../assets/img/javapswgenerator.png';
import slide3 from '../../assets/img/FourCatering.jpg';
import slide4 from '../../assets/img/NoteTaker.png';
import slide5 from '../../assets/img/svg.png';

import './Portfolio.css'

const slideImage = [
  slide0,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5
]

const projectSlide = 0;

export default function PortfolioContent(){

  const backgroundImageStyle = {
    backgroundImage: `url(${slideImage[projectSlide]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '250px',
    height: '68%',
  };


    return (
      <>
        <div style={backgroundImageStyle} className="flex-container-row gradient-overlay fade-in">
          <div id="innerFrameBottomLeft" className="flex-container deploy-ButtonStyle"><a href={slideRepo[projectSlide]} target="_blank">Go to Repo</a>
          </div>
        <div id="outerFrame" className='center-content portfolio-Centering flex-container-row'>
          <div id="innerFrameUpper">
          <h2 className="keepLeft content-Text">{slideTitle[projectSlide]}</h2>
          </div>
          <div id="innerFrameBottom">
          <p className="keepRight content-Text noWrap">{slideContent[projectSlide]}</p>
          </div>
        </div>
          <div className="flex-container-columns"> 
        <div id="innerFrameBottom" className="flex-container deploy-ButtonStyle"><a href={slideLink[projectSlide]} target="_blank">Go to Deployed Project</a>
          </div>
        </div>
      </div>
      </>
    );
  }



