import { useState } from "react";
import { slideTitle, slideContent, slideImage } from "../utils/slideContent";
import slider from "../utils/carouselFunction";

const projectSlide = 0;

export default function PortfolioContent(){

    return (
      <div>
        <div className="flex-container flex-container-row">
        <button className="portfolio-Button-Previous">Previous</button>
        <div className='flex-container center-content flex-container-row flex-Carousel'>
          <h2>{slideTitle[projectSlide]}</h2>
          <img className='portfolio-img' src= {slideImage[projectSlide]} alt="Placeholder"/>
          <p>{slideContent[projectSlide]}</p>
        </div>
        <button className="portfolio-Button-Next">Next</button>
      </div>
      <script src="../utils/carouselFunction"></script>
      </div>
    );
  }



  //This will contain my projects. I will be passing an item out of an array which will be kept in another component.
  //This lets me change what is being passed into my cards.

  //This needs to use useState to ensure it keeps the project visable.


