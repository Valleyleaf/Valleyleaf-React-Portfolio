import React from 'react';
import { useState } from "react";

export default function About(){
    return (
      <div>
        <div className='flex-container center-content'>
          <div className='flex-container  flex-container-columns center-content'>
          <h2>About me</h2>
          <div className='noWrap'>
          <p>Hey there! Welcome to my corner of the internet. I'm a versatile professional juggling a mix of tech and creativity. Started out in IT sales and people management, and now I'm diving into the coding world through a bootcamp as it has always been a latient passion .</p>
          <p>I dabble in multimedia creation – think photos, videos, and sounds. Don't hire me for sound editing, I am completely tone-deaf despite all my efforts to complete my editing trifecta.  When I'm not in front of my monitor, you'll find me lost in the world of art, painting, and creating things just for the fun of it.</p>
          <p>Join me as I navigate the wild mix of creativity and code. It's a bit of a crazy ride, but it's my way of shaping the future with a touch of innovation and a whole lot of artistic expression.</p>
          </div>
          </div>
          <img className='profile-img' src="/src//assets/ProfilePicture.jpg" alt="PlaceholderImage" />
        </div>
      </div>
    );
  }