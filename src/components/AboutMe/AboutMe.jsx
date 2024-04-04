import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from "../../assets/img/ProfilePicture.jpg"
import './aboutme.css'
import aboutMeData from '../../assets/json/AboutMe.json'
import portFolio from '../Portfolio/PortfolioMain'
import solutionStack from '../SolutionStack/solutionStack'

  export default function About(){
  return (
    <> 
      {aboutMeData ? (
          <div className='aboutMe-flex-container-row center-content main-content-scaling'>
                <div className='noWrap'>
                  <h2 className='headTextClass fade-in'>{aboutMeData.aboutMeP1}</h2>
                  <div className='fade-in-from-left'>
                  <p>{aboutMeData.aboutMeP2}</p>
                  <p>{aboutMeData.aboutMeP3}</p>
                  </div>
                  <div className='flex-container-columns center-content fade-in'>
                  <p>{aboutMeData.aboutMeP4}</p>
                      <div>
                      <Link to="/Contact">
                        <button className='contactMeButton'>Contact me</button>
                      </Link>
                      </div>
                  </div>
                </div>
                <div className='flex-container-row fade-in-from-right'>
                  <img className='profile-img' src={profilePicture} alt="ProfileImage"/>
                </div>
            </div>
      ) : (
        <p>Loading...</p>
      )}
      {/* <div id='Portfolio' className='flex-container-columns center-content fade-in '>
          <div className='flexBox3'>
          <h2 className='fade-in typewriterClass'>Solution Stack</h2>
          </div>
          {solutionStack()}
      </div> */}

      <div id='Portfolio' className='flex-container-columns center-content fade-in '>
          <div className='flexBox3'>
          <h2 className='fade-in typewriterClass'>Projects</h2>
          </div>
        {portFolio()}
      </div>
      
    </>
  );
};

//I was playing around with the idea of keeping my json file serverside, but it doesn't make much sense at this time. Keeping parts of the code as I might change my mind
//In the future. Doesn't make things hard to read and works good for reference.
