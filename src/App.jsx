import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <div className="App">
      <nav className='navbarClass'>
        <NavBar/>
      </nav>
      <section>
        <Outlet/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
