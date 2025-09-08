
import profilePicture from '../../assets/img/ProfilePicture.jpg'
import aboutMeText from './aboutMeText.jsx'
import './aboutme.css'


  export default function About(){
  return (
    <> 
        <div className='AboutMeContainer'>
          {aboutMeText()}
          <img className='profile-img' src={profilePicture} alt="ProfileImage"/>
        </div>
    </>
  );
};
