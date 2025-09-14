
import TVLoader from './TVLoader';
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
            <h2>{project.title}</h2>
            <p>{project.textContent}</p>
            <div>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'underline', marginRight: '1rem'}}>Repo</a>
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'underline'}}>Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;