import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex-container flex-container-columns'>
      <><Header/></>
      <><NavBar/></>
      <div className='main-content-scaling'><Outlet/></div>
      <div className='footer-Bottom'><Footer/></div>
    </div>
  );
}

export default App;
