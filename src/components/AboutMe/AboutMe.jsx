import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profilePicture from "../../assets/img/ProfilePicture.jpg"
import './aboutme.css'
import aboutMeData from '../../assets/json/AboutMe.json'
import portFolio from '../portfolio/projectMain'
import contact from '../Contact/Contact'

  export default function About(){
  return (
    <> 
      {aboutMeData ? (
          <div className='aboutMe-flex-container-row center-content '>
                <div className='noWrap'>
                  <h2 className='HeadTextClass fade-in txtwhite'>{aboutMeData.aboutMeP1}</h2>
                  <div className='fade-in-from-left txtwhite'>
                  <p>{aboutMeData.aboutMeP2}</p>
                  <p>{aboutMeData.aboutMeP3}</p>
                  </div>
                  <div className='flex-container-columns center-content fade-in txtwhite'>
                  <p>{aboutMeData.aboutMeP4}</p>
                      <div>
                      <Link to="/Contact">
                        <button className='contactMeButton'>Contact me</button>
                      </Link>
                      </div>
                  </div>
                </div>
                <img className='profile-img fade-in-from-right' src={profilePicture} alt="ProfileImage"/>
            </div>
      ) : (
        <p>Loading...</p>
      )}
      {/* <div className='flex-container-columns center-content fade-in '>
        <h2>Projects</h2>
        {portFolio()}
      </div>
      <div className='flex-container-columns center-content fade-in '>
      <h2>Contact Me</h2>
      {contact()}
      </div> */}
    </>
  );
};

//I was playing around with the idea of keeping my json file serverside, but it doesn't make much sense at this time. Keeping parts of the code as I might change my mind
//In the future. Doesn't make things hard to read and works good for reference.
