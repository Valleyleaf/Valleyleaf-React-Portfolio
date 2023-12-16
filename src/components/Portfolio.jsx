import { useState } from "react";

const projectSlide = 0;

export default function PortfolioContent(){

    return (
      <div>
        <div className='flex-container center-content flex-container-row flex-Carousel'>
          <p>Left Arrow</p>
          <img className='portfolio-img' src="/src//assets/Placeholder Image.png" alt="Placeholder"/>
          <p>Right Arrow</p>
        </div>
      </div>
    );
  }



  //This will contain my projects. I will be passing an item out of an array which will be kept in another component.
  //This lets me change what is being passed into my cards.

  //This needs to use useState to ensure it keeps the project visable.


