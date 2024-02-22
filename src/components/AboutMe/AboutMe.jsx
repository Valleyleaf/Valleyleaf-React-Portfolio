import React, { useState, useEffect } from 'react';
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
                  <h2 className='Howdy'>Howdy</h2>
                  <p>{aboutMeData.aboutMeP1}</p>
                  <p>{aboutMeData.aboutMeP2}</p>
                </div>
            </>

            <img className='profile-img' src={profilePicture} alt="ProfileImage"/>
          </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

//I was playing around with the idea of keeping my json file serverside, but it doesn't make much sense at this time. Keeping parts of the code as I might change my mind
//In the future. Doesn't make things hard to read and works good for reference.
