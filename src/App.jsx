import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className='Header-Top'><Header/></div>

      <div className='navbar'><NavBar/></div>

      <div className='main-content-scaling Outlet-Positioning'>
        <Outlet/>
      </div>

      <div className='footer-Bottom'>
        <Footer/>
        </div>
    </>
  );
}

export default App;
