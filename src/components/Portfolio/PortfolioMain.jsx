import React from 'react';
import { projectData } from '../../utils/RepoprojectContent';
import ProjectCard from './ProjectCard';
import './portfolio.css';

function PortfolioMain() {
  return (
    <section id="portfolioRef" className="portfolioFlexColumn">
      <h2 className="projectText">Projects</h2>
      <div className="portfolioFlexRow">
        {projectData.map((data, idx) => (
          <ProjectCard
            key={idx}
            title={data.title}
            textContent={data.textContent}
            image={data.image}
            repoLink={data.repoLink}
            deployLink={data.deployLink}
          />
        ))}
      </div>
    </section>
  );
}

export default PortfolioMain;
