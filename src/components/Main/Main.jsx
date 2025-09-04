import './main.css'
import aboutMeData from '../../assets/json/AboutMe.json'
import portFolio from '../Portfolio/PortfolioMain'
import solutionStack from '../SolutionStack/SolutionStack'
import AboutSection from '../AboutMe/AboutMe'


  export default function Main(){
  return (
    <> 
      {aboutMeData ? (
          <div>
              {AboutSection()}
            <div className='fade-in'>
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
