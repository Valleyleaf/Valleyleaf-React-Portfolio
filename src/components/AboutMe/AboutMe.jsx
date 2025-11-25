import profilePicture from '../../assets/img/ProfilePicture.jpg'
import './aboutme.css'
import aboutMeJson from './aboutMe.json'
import BannerImage from '../../assets/img/Banner.png'


  export default function About(){
  return (
    <> 
        <section id='aboutMeRef' className='AboutMeContainer'>
          <div
            className='aboutMeBackground'
            style={{ backgroundImage: `url(${BannerImage})` }}
          >
            <div className='aboutMeTextContainer fade-in'>
              <h2 className='aboutMetitle'>{aboutMeJson.aboutme.header}</h2>
              <p className='aboutMeDescription'>{aboutMeJson.aboutme.description}</p>
              {/* <button>Interested in working with me?</button> */}
            </div>
          </div>
        </section>
    </>
  );
};
