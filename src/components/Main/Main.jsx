import './main.css'
import aboutMeData from '../../assets/json/AboutMe.json'
import portFolio from '../Portfolio/PortfolioMain'
import solutionStack from '../SolutionStack/SolutionStack'
import AboutSection from '../AboutMe/AboutMe'


  export default function Main(){
  return (
    <> 
      {aboutMeData ? (
          <div className='aboutMe-flex-container-columns'>
              {AboutSection()}
            <div className='flex-container-columns center-content fade-in'>
              {solutionStack()}
            </div>
            <div id='Portfolio' className='flexColumn center-content fade-in '>
              {portFolio()}
            </div>
          </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
