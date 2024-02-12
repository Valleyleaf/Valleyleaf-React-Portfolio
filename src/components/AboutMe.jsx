import React from 'react';
import profilePicture from "../assets/ProfilePicture.jpg"

export default function About(){
    return (
      <div>
        <div className='flex-container center-content'>
          <div className='flex-container  flex-container-columns center-content'>
          <h2>About me</h2>
          <div className='noWrap'>
          <p>Howdy. My name is Aston .A Dahllof. I'm a versatile professional juggling a mix of tech and creativity. Started out in IT sales and people management, and now I'm diving into the coding world through a bootcamp as it has always been a latient passion .</p>
          <p>I dabble in multimedia creation. Photos, videos, and sound. When I'm not in front of my monitor, you'll find me lost in the world of art, painting, and creating things just for the fun of it.</p>
          </div>
          </div>
          <img className='profile-img' src={profilePicture} alt="ProfileImage"/>
        </div>
      </div>
    );
  }