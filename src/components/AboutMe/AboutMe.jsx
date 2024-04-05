import React from 'react';
import { Link } from 'react-router-dom';
import './aboutme.css'
import aboutMeData from '../../assets/json/AboutMe.json'
import portFolio from '../Portfolio/PortfolioMain'
import solutionStack from '../SolutionStack/SolutionStack'
import AboutMe from './AboutSection'


  export default function About(){
  return (
    <> 
      {aboutMeData ? (
          <div className='aboutMe-flex-container-columns'>
              {AboutMe()}
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

//I was playing around with the idea of keeping my json file serverside, but it doesn't make much sense at this time. Keeping parts of the code as I might change my mind
//In the future. Doesn't make things hard to read and works good for reference.

//This should be called main or something instead of AboutMe.
