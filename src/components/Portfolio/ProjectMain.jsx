import React from 'react';
import { useState } from "react";
import PortfolioItem from "./PortfolioCard1";
import PortfolioProject2 from "./PortfolioCard2";
import PortfolioProject3 from "./PortfolioCard3";
import PortfolioProject4 from "./PortfolioCard4";
import PortfolioProject5 from "./PortfolioCard5";
import '../../App.css'

function Portfolio(){

    return (
      <div className='flex-container-columns center-content'>
        <div className='flexBox3'>
          <h2 className='headTextClass typewriterClass fade-in'>Projects</h2>
        </div>
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

//Consider. Instead of 5 project cards. Since they run off the utils js framework previously implementetd. Why not move the function of projectSlide into here and then do a for/each on the PortfolioProjects.
//Then Import the provided number via react import to the Portfolio card. This will render one of each project and save space.


