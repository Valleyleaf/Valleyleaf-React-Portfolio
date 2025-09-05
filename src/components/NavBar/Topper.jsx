import React from 'react';
import './topper.css';



export default function Topper(){
    return (
      <div className='flexColumn center-content'>
        <div className='flexRow center-content'>

          <div className='topper'>
            <div className='topper-lines-container'>
              <div className='topper-lines'></div>
            </div>
          </div>
          {/* Above is the logo. I should probably just turn it into a SVG but here we are.  */}
            <h2 className='firstName'>ASTON ANDERSSON DAHLLOF</h2>
        </div>  
        <p className='title'>App Developer</p>
      </div>
    );
}