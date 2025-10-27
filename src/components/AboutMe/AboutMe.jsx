import profilePicture from '../../assets/img/ProfilePicture.jpg'
import './aboutme.css'
import aboutMeJson from './aboutMe.json'


  export default function About(){
  return (
    <> 
        <div className='AboutMeContainer'>
            <div className='aboutMeTextContainer fade-in'>
              <h2 className='aboutMetitle'>{aboutMeJson.aboutme.header}</h2>
              <p>{aboutMeJson.aboutme.description}</p>
              {/* <button>Interested in working with me?</button> */}
            </div>
          <img className='profile-img' src={profilePicture} alt="ProfileImage"/>
        </div>
    </>
  );
};
