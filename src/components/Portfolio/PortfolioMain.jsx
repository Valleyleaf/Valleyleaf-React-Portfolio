import React from 'react';
import {projectData} from '../../utils/RepoprojectContent'
import './portfolio.css'
import deployIcon from '../../assets/img/link-alt-1-svgrepo-com.svg';
import repoIcon from '../../assets/img/inbox-alt-1-svgrepo-com.svg';

function PortfolioMain() {
  const renderItems = () => {
    return projectData.map((data, _id) => (
      <div 
      key={_id} 
      className='projectSlidePassive'
      style={{ 
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${data.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: '4'
      }}
      >
          <div className='projectContainer'>
          <div className='projectBox'>
          <h2>{data.title}</h2>
          <p>{data.textContent}</p>
          </div>
          <div className="repoBox">
            <a href={data.repoLink} target="_blank"><img className='deployandrepo' src={repoIcon} alt="Link to repo"/></a>
            <a href={data.deployLink} target="_blank"><img className='deployandrepo' src={deployIcon} alt="Link to Deployed project" /></a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className='portfolioFlexColumn'>
      <h2 className='projectText'>Projects</h2>
        <div className='portfolioFlexRow'>
          {renderItems()}
        </div>
    </div>
  );
}

export default PortfolioMain;

//Above isn't ideal. Should refactor to the structure that SolutionStack has in terms of data management. Though honestly, I will probably change all of this so I'm not gonna waste time on it.