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
          <div>
            <h2>About me</h2>
            <p>{aboutMeData.aboutMeP1}</p>
          </div>


          <img className='profile-img' src={profilePicture} alt="ProfileImage"/>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
