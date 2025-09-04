import React from 'react';
import { Link } from 'react-router-dom';
import './aboutme.css'
import aboutMeData from '../../assets/json/AboutMe.json'
import profilePicture from '../../assets/img/ProfilePicture.jpg'

  export default function About(){
  return (
    <> 
      {aboutMeData ? (
        <div className='AboutMeContainer'>
          <div className='aboutMeTextContainer fade-in'>
            <h2>{aboutMeData.aboutMeP1}</h2>
            <p>{aboutMeData.aboutMeP2}</p>
            <p>{aboutMeData.aboutMeP3}</p>
          </div>


          <img className='profile-img' src={profilePicture} alt="ProfileImage"/>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
