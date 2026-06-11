import './home.css'
import SolutionStack from '../SolutionStack/SolutionStack.jsx'
import AboutSection from '../AboutMe/AboutMe.jsx'
import Projects from '../Projects/Projects.jsx'

  export default function Main(){
  return (
    <> 
      <div>
          <AboutSection/>
        <div className='fade-in'>
          <SolutionStack/>
        </div>
        <div className="fade-in">
          <h2 className="projectTitle">Projects</h2>
          <Projects/>
        </div>
      </div>
    </>
  );
};
