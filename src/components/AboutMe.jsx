import React from 'react';
import { useState } from "react";

export default function About(){
    return (
      <div>
        <div className='flex-container center-content'>
          <div className='flex-container  flex-container-columns center-content'>
          <h2>About me</h2>
          <div className='noWrap'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
            </div>
          </div>
          <img className='profile-img' src="/src//assets/ProfilePicture.jpg" alt="PlaceholderImage" />
        </div>
      </div>
    );
  }