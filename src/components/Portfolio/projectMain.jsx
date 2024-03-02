import React from 'react';
import PortfolioItem1 from "./PortfolioCard1";
import PortfolioProject2 from "./PortfolioCard2";
import PortfolioProject3 from "./PortfolioCard3";
import PortfolioProject4 from "./PortfolioCard4";
import PortfolioProject5 from "./PortfolioCard5";
import '../../App.css'


export default function Portfolio(){
    return (
      <div className='flex-container-row center-content'>
        <div className='projectSlidePassive'>
          <PortfolioItem1/>
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
    );
  }

//Consider. Instead of 5 project cards. Since they run off the utils js framework previously implementetd. Why not move the function of projectSlide into here and then do a for/each on the PortfolioProjects.
//Then Import the provided number via react import to the Portfolio card. This will render one of each project and save space.
