import { useState } from "react";
import { slideTitle, slideContent, slideLink, slideRepo} from "../utils/slideContent";


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
  const [projectSlide, setProjectSlide] = useState(0);

  const handlePreviousClick = () => {
    setProjectSlide((prevSlide) => (prevSlide - 1 + slideImage.length) % slideImage.length);
  };

  const handleNextClick = () => {
    setProjectSlide((prevSlide) => (prevSlide + 1) % slideImage.length);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${slideImage[projectSlide]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

//First div in this holds everything.
    return (
      <>
        <div style={backgroundImageStyle} className="">

          <div className=""> 
        <button id="portfolio-Button-Previous" className=""
        onClick={handlePreviousClick}>Previous
        </button>
          <div id="innerFrameBottomLeft" className="flex-container deploy-ButtonStyle"><a href={slideRepo[projectSlide]} target="_blank">Go to Repo</a>
          </div>
        </div>

        <div id="outerFrame" className=''>
          <div id="innerFrameUpper">
          <h2 className="keepLeft content-Text">{slideTitle[projectSlide]}</h2>
          </div>

          <div id="innerFrameBottom">
          <p className="keepRight content-Text noWrap">{slideContent[projectSlide]}</p>
          </div>
        </div>
          <div className="flex-container-columns"> 
        <button id="portfolio-Button-Next" className="center-content" 
        onClick={handleNextClick}>Next
        </button>
        <div id="innerFrameBottom" className="flex-container deploy-ButtonStyle"><a href={slideLink[projectSlide]} target="_blank">Go to Deployed Project</a>
          </div>
        </div>
      </div>
      </>
    );
  }



//Fun fact. I can just make inherent css instead of having a classname in everything. REDO.

