import { useState } from "react";
import { slideTitle, slideContent, slideImage } from "../utils/slideContent";

const projectSlide = 0;

export default function PortfolioContent(){
  const [projectSlide, setProjectSlide] = useState(0);

  const handlePreviousClick = () => {
    setProjectSlide((prevSlide) => (prevSlide - 1 + slideImage.length) % slideImage.length);
    console.log('subtracting -');
  };

  const handleNextClick = () => {
    setProjectSlide((prevSlide) => (prevSlide + 1) % slideImage.length);
    console.log('adding +');
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${slideImage[projectSlide]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '1200px',
    height: '800px',
  };


    return (
      <div>
        <div style={backgroundImageStyle} className="flex-container flex-container-row Portfolio-framing flex-Carousel">
        <button id="portfolio-Button-Previous" className="center-content" 
        onClick={handlePreviousClick}>Previous
        </button>

        <div className='flex-container center-content flex-container-row flex-Carousel'>
          <h2 className="keepLeft">{slideTitle[projectSlide]}</h2>
          
          <p className="keepRight">{slideContent[projectSlide]}</p>
          
        </div>
        <button id="portfolio-Button-Next" className="center-content" 
        onClick={handleNextClick}>Next
        </button>
      </div>
      </div>
    );
  }



  //This will contain my projects. I will be passing an item out of an array which will be kept in another component.
  //This lets me change what is being passed into my cards.

  //This needs to use useState to ensure it keeps the project visable.


