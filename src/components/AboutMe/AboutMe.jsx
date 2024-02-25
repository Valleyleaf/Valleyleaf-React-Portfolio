import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profilePicture from "../../assets/img/ProfilePicture.jpg"
import './aboutme.css'
import aboutMeData from '../../assets/json/AboutMe.json'

  export default function About(){
  return (
    <>
      {aboutMeData ? (
        <div className='flex-container-row center-content'>
          <>
                <div className='noWrap'>
                  <h2 className='HeadTextClass fade-in'>{aboutMeData.aboutMeP1}</h2>
                  <div className='fade-in-from-left'>
                  <p>{aboutMeData.aboutMeP2}</p>
                  <p>{aboutMeData.aboutMeP3}</p>
                  </div>

                  <div className='flex-container-columns center-content'>
                  <p>{aboutMeData.aboutMeP4}</p>

                      <div className='contactMeButton'>
                      <Link to="/Contact">
                        <button className='contactMeButton'>Contact me</button>
                      </Link>
                      </div>
                  </div>
                  
                </div>
            </>
            <img className='profile-img fade-in-from-right' src={profilePicture} alt="ProfileImage"/>
          </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

//I was playing around with the idea of keeping my json file serverside, but it doesn't make much sense at this time. Keeping parts of the code as I might change my mind
//In the future. Doesn't make things hard to read and works good for reference.
