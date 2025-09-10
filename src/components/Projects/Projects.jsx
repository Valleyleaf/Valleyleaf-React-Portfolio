import TVLoader from './TVLoader';
import './projects.css';

function Projects() {


  return (
    <section className="projectsMain">
      <div className='projectVisualContainer'>
        <div className='projectContainer'>
          <div className='tvLoaderWrapper'>
            <TVLoader/>
          </div>
        </div>

          <div className='tvBottom'>
          </div>
        <div className='projectController'>
        </div>
      </div>  

    </section>
  );
}

export default Projects;