
import deployIcon from '../../assets/img/link-alt-1-svgrepo-com.svg';
import repoIcon from '../../assets/img/inbox-alt-1-svgrepo-com.svg';
import './projects.css';
import projectsData from '../../utils/projects.json';
import topperLogo from '../../assets/img/logoSVG.svg'

export default function Projects() {
  return (
    <section id='portfolioRef' className="projectsMain">
        <div className='projectTitleBox'>
            <img src={topperLogo} alt="logo" className='topperLogo'/>
            <h2 className='project-main-title'>My Projects</h2>
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
            <div className='repoBox'>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer"><h2 className='deployandrepo'>GitHub Link</h2></a>
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer"><h2 className='deployandrepo'>Deployment Link</h2></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

