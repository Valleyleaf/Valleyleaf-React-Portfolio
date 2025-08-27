import headerSocialButtons from './HeaderSocialButtons';
import NavBar from '../Header/HeaderNav';
import '../../assets/css/header.css'


export default function Header(){
    return (
      <div>
        <div className='headerMain'>
          <nav>
            <NavBar/>
          </nav>
        </div>
      </div>
    );
  }