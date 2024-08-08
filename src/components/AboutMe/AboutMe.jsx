import React from 'react';
import { Link } from 'react-router-dom';
import './aboutme.css'
import aboutMeData from '../../assets/json/AboutMe.json'
import portFolio from '../Portfolio/PortfolioMain'
import solutionStack from '../SolutionStack/SolutionStack'
import AboutSection from './AboutSection'


  export default function About(){
  return (
    <> 
      {aboutMeData ? (
          <div className='aboutMe-flex-container-columns'>
              {AboutSection()}
            <div className='flex-container-columns center-content fade-in'>
              {solutionStack()}
            </div>
            <div id='Portfolio' className='flex-container-columns center-content fade-in '>
              <div className='flexBox3'>
              <h2 className='fade-in headTextSectioned'>Projects</h2>
              </div>
              {portFolio()}
            </div>
          </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
