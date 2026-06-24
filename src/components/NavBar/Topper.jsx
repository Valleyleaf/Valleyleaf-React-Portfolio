import { Link } from 'react-router-dom';
import './NavBar.css';
import topperLogo from '../../assets/img/logoSVG.svg';


export default function Topper(){
    return (
      <Link className='topper-link' to="/">
      <div className='flexColumn center-content'>
        <div className='flexRow center-content'>
            <img className='topperLogo' src={topperLogo} alt="logo" />
            <h2 className='firstName'>ASTON ANDERSSON DAHLLOF</h2>
        </div>
        <p className='title'>Full-Stack Web Developer</p>
      </div>
      </Link>
    );
}