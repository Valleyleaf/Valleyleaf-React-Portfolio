import React, { useState, useEffect } from 'react';
import profilePicture from "../../assets/img/ProfilePicture.jpg"
import './aboutme.css'

const AboutMe = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./AboutMe.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <div className='flex-container center-content'>
          <div className='flex-container-columns '></div>
            <h2 className='Howdy'>Howdy</h2>
            <div className='noWrap'>
            <p>{data.aboutMeP1}</p>
            <p>{data.aboutMeP2}</p>
            </div>
            <img className='profile-img' src={profilePicture} alt="ProfileImage"/>
          </div>
          </div>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AboutMe;
