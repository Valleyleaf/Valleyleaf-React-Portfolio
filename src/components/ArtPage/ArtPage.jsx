import React, { useState, useEffect } from 'react';

import './artPage.css'

  export default function Art(){
  return (
    <>
    <div className='flex-container-columns center-content main-content-scaling'>

      <h2 className='flex-container-row center-content'>Art & Design</h2>
      <p>This is how I spend my free time.</p>
        <div className='flex-container-row center-content'>

        <div className='responsive-grid'>
          <div className='displayImageLarge'></div>
          <div className='displayImageMedium'></div>
          <div className='displayImageSmall'></div>
      </div>

      <div className='responsive-grid'>
          <div className='displayImageMedium'></div>
          <div className='displayImageSmall'></div>
          <div className='displayImageLarge'></div>
      </div>

      <div className='responsive-grid'>
          <div className='displayImageSmall'></div>
          <div className='displayImageLarge'></div>
          <div className='displayImageMedium'></div>
      </div>

      </div>
    </div>
    </>
  );
};

