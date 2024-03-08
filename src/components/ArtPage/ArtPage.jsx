import React, { useState, useEffect } from 'react';

import './artPage.css'

import gal0 from '../../assets/art&Design/ToxicBarrier.jpg'
import gal1 from '../../assets/art&Design/GhostTribute.jpg'
import gal2 from '../../assets/art&Design/ToxicBarrier.jpg'
import gal3 from '../../assets/art&Design/GhostTribute.jpg'
import gal4 from '../../assets/art&Design/Howling.jpg'
import gal5 from '../../assets/art&Design/TheHerald.jpg'
import gal6 from '../../assets/art&Design/ToxicBarrier.jpg'
import gal7 from '../../assets/art&Design/StayOut.jpg'
import gal8 from '../../assets/art&Design/GhostTribute.jpg'

const gallery = [
  gal0,
  gal1,
  gal2,
  gal3,
  gal4,
  gal5,
  gal6,
  gal7,
  gal8,
]

  export default function Art(){
  return (
    <>
    <div className='flex-container-columns center-content main-content-scaling'>

      <h2 className='flex-container-row center-content txtwhite'>Art & Design</h2>
      <p>This is how I spend my free time.</p>
        <div className='flex-container-row center-content'>

        <div className='responsive-grid'>
          <div className='displayImageLarge fade-in-from-top'>
            <img className='imgFit' src={gallery[0]} alt="DisplayedArtwork"/>
          </div>

          <div className='displayImageMedium fade-in-from-left'>
            <img className='imgFit' src={gallery[3]} alt="DisplayedArtwork"/>
          </div>

          <div className='displayImageSmall fade-in-from-bottom'>
            <img className='imgFit' src={gallery[6]} alt="DisplayedArtwork"/>
          </div>
      </div>

      <div className='responsive-grid'>
          <div className='displayImageMedium fade-in-from-top'>
            <img className='imgFit' src={gallery[1]} alt="DisplayedArtwork"/>
          </div>

          <div className='displayImageSmall fade-in'>
            <img className='imgFit' src={gallery[4]} alt="DisplayedArtwork"/>
          </div>

          <div className='displayImageLarge fade-in-from-bottom'>
            <img className='imgFit' src={gallery[7]} alt="DisplayedArtwork"/>
          </div>
      </div>

      <div className='responsive-grid'>
          <div className='displayImageSmall fade-in-from-top'>
            <img className='imgFit' src={gallery[2]} alt="DisplayedArtwork"/>
          </div>

          <div className='displayImageLarge fade-in-from-right'>
            <img className='imgFit' src={gallery[5]} alt="DisplayedArtwork"/>
          </div>

          <div className='displayImageMedium fade-in-from-bottom'>
            <img className='imgFit' src={gallery[8]} alt="DisplayedArtwork"/>
          </div>
      </div>

      </div>
    </div>
    </>
  );
};

