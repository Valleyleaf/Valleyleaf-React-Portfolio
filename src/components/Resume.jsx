import React from 'react';

export default function Resume(){
    return (
      <>
        <div className='flex-container center-content flex-container-columns'>
          <h2>Resume</h2>
          <div>
            <>
              <h2>Front-End Stack</h2>
                <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Handlebars</li>
                <li>React</li>
                <li>Redux</li>
                </ul>
            </>
            <div className='float-left'>
              <h2>Back-End Stack</h2>
                <ul>
                <li>express.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                </ul>
            </div>
          <p>Interested in hiring me? Find my full resume for download below</p>
          </div>
          <a className='flex-container center-content' href="https://drive.google.com/file/d/1s18svdfbGZAs4NlCMWq162Qr82qUfiOW/view?usp=sharing">Download</a>
        </div>
      </>
    );
  }