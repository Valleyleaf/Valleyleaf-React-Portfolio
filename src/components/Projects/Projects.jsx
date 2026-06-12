
import deployIcon from '../../assets/img/link-alt-1-svgrepo-com.svg';
import repoIcon from '../../assets/img/inbox-alt-1-svgrepo-com.svg';
import './projects.css';
import projectsData from '../../utils/projects.json';


function Projects() {
  return (
    <section id='portfolioRef' className="projectsMain">
      <div className='flexColumn center-content'>
        <div className='flexRow center-content'>
          <div className='topper'>
            <div className='topper-lines-container'>
              <div className='topper-lines'></div>
            </div>
          </div>
            <h2 className='project-main-title'>My Projects</h2>
        </div>
      </div>

      <div className="projects-list">
        {projectsData.Projects.map((project) => (
          <div
            key={project._id}
            className="project-item"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.0) 80%), url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className='projectTitle'>{project.title}</h2>
            <p className='projectDisc'>{project.textContent}</p>
            <div>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'underline', marginRight: '1rem'}}><img className='deployandrepo' src={repoIcon} alt="repo"/></a>
              
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'underline'}}><img className='deployandrepo' src={deployIcon} alt="repo"/></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;