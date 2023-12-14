import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Project from './components/ProjectCard'


function App() {
  console.log('App has been launched')
  return (
    <div>
      <Header/>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
