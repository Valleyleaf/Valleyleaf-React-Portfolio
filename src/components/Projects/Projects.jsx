
import TVLoader from './TVLoader';
import deployIcon from '../../assets/img/link-alt-1-svgrepo-com.svg';
import repoIcon from '../../assets/img/inbox-alt-1-svgrepo-com.svg';
import './projects.css';
import projectsData from '../../assets/json/projects.json';


function Projects() {
  return (
    <section className="projectsMain">
      <div className="projects-list">
        {projectsData.map((project) => (
          <div
            key={project._id}
            className="project-item"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.0) 80%), url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '12px',
              border: '5px solid var(--arcBG3)',
              padding: '1rem',
              margin: '1rem',
              color: '#fff',
              minHeight: '450px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
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