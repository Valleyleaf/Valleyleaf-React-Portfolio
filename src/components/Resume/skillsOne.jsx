import React from 'react';

export default function jobOne(){
    return (
      <div className='resumeBox flex-container-columns center-content'>
          <h2>Full-Stack Development</h2>
          <div className='flex-container-row'>
            <div className='divider-Right'>
              <h3>Front-End</h3>
              <div className='flex-container-row'>
                <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                </ul>
                <ul>
                <li>Handlebars</li>
                <li>React</li>
                <li>Redux</li>
                </ul>
                </div>
              </div>
            <div className='float-left'>
              <h3>Back-End</h3>
              <div className='flex-container-row'>
                <ul>
                <li>express.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                </ul>
                <ul>
                <li>Mongoose</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                </ul>
                </div>
            </div>
            </div>
    </div>
    );
  }