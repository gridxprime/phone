import './App.css';
import React from 'react';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {




  return (

    <>
      <section>
        <div className="phone">
          <div className="phone__case">
            <div className="phone__screen">
            <Header></Header>
            <div className="phone__space">
              <Link to='/call'>Phone</Link>
            </div>
            <Link style={{zIndex: '100',position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX( -50%)'}} to='/'>Home</Link>
            </div>
            <span>Everon</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
