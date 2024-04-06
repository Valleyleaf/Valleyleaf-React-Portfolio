import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <div className='Header-Top'>
        <Header/>
      </div>

      <div className='navbarClass'>
        <NavBar/>
      </div>

      <div className='Outlet-Positioning'>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
