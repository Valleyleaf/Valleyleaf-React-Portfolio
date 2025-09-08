import './main.css'
import portFolio from '../Portfolio/PortfolioMain'
import solutionStack from '../SolutionStack/SolutionStack'
import AboutSection from '../AboutMe/AboutMe'


  export default function Main(){
  return (
    <> 
      <div>
          {AboutSection()}
        <div className='fade-in'>
          {solutionStack()}
        </div>
        {/* <div id='Portfolio' className='flexColumn center-content fade-in '>
          {portFolio()}
        </div> */}
      </div>
    </>
  );
};
