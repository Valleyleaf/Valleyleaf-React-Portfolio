import './home.css'
import SolutionStack from '../SolutionStack/SolutionStack.jsx'
import AboutSection from '../AboutMe/AboutMe.jsx'
import Projects from '../Projects/Projects.jsx'

export default function Main(){
  return (
    <> 
      <main className="fade-in">
          <AboutSection/>
          <Projects/>
          <SolutionStack/>
      </main>
    </>
  );
};
