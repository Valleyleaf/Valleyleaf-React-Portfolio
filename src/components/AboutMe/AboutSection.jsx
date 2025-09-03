import { Link } from 'react-router-dom';

function AboutSection(){

    return (
        <div className='flexColumn center-content'>
          <h2>ASTON ANDERSSON DAHLLOF</h2>
          <p>Full-Stack Developer</p>
        <div className='noWrap'>
          <div className='flex-container-columns center-content fade-in'>
              <div>
              <Link to="/Contact">
                <button className='contactMeButton'>Contact me</button>
              </Link>
              </div>
          </div>
        </div>
    </div>
    )
}

export default AboutSection;