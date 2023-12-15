import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  console.log('App has been launched')
  return (
    <div className='flex-container flex-container-columns'>
      <div><Header/></div>
      <div><NavBar/></div>
      <div><Outlet/></div>
      <div className='footer-Bottom'><Footer/></div>
    </div>
  );
}

export default App;
