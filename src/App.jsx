import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function App() {




  return (

    <>
      <section className='screen'>
        <ul className='app__list'>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='calculator'><li>Calc</li></Link>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='calendar'><li>Calendar</li></Link>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='galery'><li>Galery</li></Link>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='news'><li>News</li></Link>
          <li></li>
          <li></li>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='browser'><li>Browser</li></Link>
          <li></li>
          <li></li>
        </ul>
      </section>
    </>
  );
}

export default App;
