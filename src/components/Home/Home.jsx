import './home.css'
import SolutionStack from '../SolutionStack/SolutionStack.jsx'
import AboutSection from '../AboutMe/AboutMe.jsx'
import Projects from '../Projects/Projects.jsx'
import BacktoTop from '../BacktoTopButton/BacktoTop.jsx'


export default function Main(){
  return (
    <> 
      <main className="fade-in">
          <AboutSection/>
          <Projects/>
          <SolutionStack/>
          <BacktoTop/>
      </main>
    </>
  );
};
