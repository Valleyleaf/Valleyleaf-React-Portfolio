import React from 'react';
import pngimage from '../../assets/img/pdfimage.png';
export default function Resume(){
    return (
      <>
        <div className='flex-container center-content flex-container-columns fade-in'>
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
          <img className='mini-img' src={pngimage} alt="Download Resume" />
          <a className='flex-container center-content deploy-ButtonStyle' href="https://drive.google.com/file/d/1s18svdfbGZAs4NlCMWq162Qr82qUfiOW/view?usp=sharing">Download</a>
        </div>
      </>
    );
  }