import React from 'react';
import aboutMeData from '../../assets/json/AboutMe.json'
import { Link } from 'react-router-dom';
import profilePicture from "../../assets/img/ProfilePicture.jpg"

function AboutSection(){

    return (
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
    )
}

export default AboutSection;