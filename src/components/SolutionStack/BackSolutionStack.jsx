import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {BackEndSkillData} from '../../utils/BackEndstackContent'
import './solutionstack.css'

function solutionStack(){
        const renderItems = () => {

          return BackEndSkillData.map((skill, _id) => (
            <div key={_id} className='stackContainer fade-in'>
                <img className="stackImage" src={skill.icon} alt={skill.alt}/>
                <h5>{skill.title}</h5>
                {/* <h2 className='skillLevel'>{skill.stackSkillLevel}</h2> */}
            </div>
          ));
        };
      
        return (
          <div className='flex-container-column'>
              <div className='flex-container-row center-content defaultSpacing'>
                {renderItems()}
              </div>
          </div>
        );
      }



export default solutionStack;
