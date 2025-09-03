import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div className="App">
      <nav className='navbarClass '>
        <NavBar/>
      </nav>
      <section className='topper-lines'>
        <Outlet/>
      </section>
    </div>
  );
}

export default App;
