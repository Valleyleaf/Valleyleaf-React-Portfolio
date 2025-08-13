import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profilePicture from "../../assets/img/ProfilePicture.jpg"
import './aboutme.css'
import aboutMeData from '../../assets/json/AboutMe.json'
import portFolio from '../Portfolio/ProjectMain'
import contact from '../Contact/Contact'

  export default function About(){
  return (
    <> 
      {aboutMeData ? (
          <div className=''>
                <div className=''>
                  <h2 className=''>{aboutMeData.aboutMeP1}</h2>
                  <div className=''>
                  <p>{aboutMeData.aboutMeP2}</p>
                  <p>{aboutMeData.aboutMeP3}</p>
                  </div>
                  <div className=''>
                  <p>{aboutMeData.aboutMeP4}</p>
                      <div>
                      <Link to="/Contact">
                        <button className=''>Contact me</button>
                      </Link>
                      </div>
                  </div>
                </div>
                <img className='' src={profilePicture} alt="ProfileImage"/>
            </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

//I was playing around with the idea of keeping my json file serverside, but it doesn't make much sense at this time. Keeping parts of the code as I might change my mind
//In the future. Doesn't make things hard to read and works good for reference.
