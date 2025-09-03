import React from 'react';
import {FrontEndSkillData} from '../../utils/FrontEndstackContent'
import {BackEndSkillData} from '../../utils/BackEndstackContent'

import './solutionstack.css'

function solutionStack(){
  const renderItems = (data) => {
    return data.map((skill, _id) => (
      <div 
      key={_id} 
      className='stackContainer fade-in'>
        <img className="stackImage" src={skill.icon} alt={skill.alt}/>
        <h5>{skill.title}</h5>
      </div>
    ));
  };
  
  const FErenderItems = () => {
    return renderItems(FrontEndSkillData);
  };
  
  const BErenderItems = () => {
    return renderItems(BackEndSkillData);
  };

        return (
          <div className='solutionStackContainer'>
              <h2 className='fade-in SolutionText'>Languages</h2>
              <div className='solutionFlexRow'>
                {FErenderItems()}
              </div>
              <h2 className='fade-in SolutionText'>Solutions & Frameworks</h2>
              <div className='solutionFlexRow'>
              {BErenderItems()}
              </div>
          </div>
        );
      }

//Above can technically be broken down into a single function and re-rendered twice but I don't want to do that.

export default solutionStack;
