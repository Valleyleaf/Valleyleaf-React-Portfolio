import React from 'react';
import { useState } from "react";
import PortfolioItem from "./PortfolioCard1";
import PortfolioProject2 from "./PortfolioCard2";
import PortfolioProject3 from "./PortfolioCard3";
import PortfolioProject4 from "./PortfolioCard4";
import PortfolioProject5 from "./PortfolioCard5";
import '../../App.css'

import projectCounter from '../../utils/projectCounter'



function Portfolio(){

    return (
      <div className='flex-container-columns center-content'>
        <h2 className='HeadTextClass typewriterClass fade-in'>Projects</h2>
      <div className='flex-container-row center-content topDividerPortfolio'>
        
        <div className='projectSlidePassive'>
          <PortfolioItem/>
        </div>

        <div className='projectSlidePassive'>
          <PortfolioProject2/>
        </div>

        <div className='projectSlidePassive'>
          <PortfolioProject3/>
        </div>

        <div className='projectSlidePassive'>
          <PortfolioProject4/>
        </div>

        <div className='projectSlidePassive'>
          <PortfolioProject5/>
        </div>
      </div>
    </div>
    );
  }

export default Portfolio;

//Again, just too much className. FIX.


