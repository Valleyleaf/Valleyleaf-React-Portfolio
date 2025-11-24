import './main.css'
import solutionStack from '../SolutionStack/SolutionStack'
import AboutSection from '../AboutMe/AboutMe'
import PortfolioMain from '../Portfolio/PortfolioMain'
import Contact from '../Contact/Contact.jsx';

  export default function Main(){
  return (
    <> 
      <div>
          {AboutSection()}
        <div className='fade-in'>
          {solutionStack()}
        </div>
        <div className="fade-in">
          <h2 className="projectTitle">Projects</h2>
          {PortfolioMain()}
        </div>
        {/* <div className='fade-in'>
          {Contact()}
        </div> */}
      </div>
    </>
  );
};
