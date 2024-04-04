import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {stackImage, stackTitle, stackSkillLevel} from '../../utils/WIPsContent'


function solutionStack(){
        const renderItems = () => {
          return stackImage.map((renderBG, index) => (
            <div key={index} className=''>
                <div className=''>
                    <div className=''>
                    <h2>{stackTitle[index]}</h2>
                    <img src="" alt="" />
                    <p>{stackSkillLevel[index]}</p>
                    </div>
              </div>
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
