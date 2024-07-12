import './App.css';
import './media.css'
import React from 'react';
import { Link } from 'react-router-dom';
import CalendarIcon from './apps/AppsIcons/calendar.png'
import CalculatorIcon from './apps/AppsIcons/calculator.png'
import GaleryIcon from './apps/AppsIcons/galery.png'
import NewsIcon from './apps/AppsIcons/news.png'
import WeatherIcon from './apps/AppsIcons/weather.png'
import BrowserIcon from './apps/AppsIcons/browser.png'
import CallIcon from './apps/AppsIcons/call.png'
import NotesIcon from './apps/AppsIcons/notes.png'

function App() {




  return (

    <>
      <section className='screen'>
        <ul className='app__list'>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='calculator'><li>
          <img src={CalculatorIcon} alt="" /> Calculator</li></Link>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='calendar'><li>  <img src={CalendarIcon} alt="" />Calendar</li></Link>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='galery'><li><img src={GaleryIcon} alt="" />Galery</li></Link>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='news'><li><img src={NewsIcon} alt="" />News</li></Link>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='weather'><li><img src={WeatherIcon} alt="" />Weather</li></Link>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='notes'><li><img src={NotesIcon} alt="" />Notes</li></Link>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='browser'><li><img src={BrowserIcon} alt="" />Browser</li></Link>
          <li></li>
          <Link  to='call' style={{textDecoration: 'none', color: 'inherit'}}> <li><img src={CallIcon} alt="" />Phone</li></Link>
        </ul>
      </section>
    </>
  );
}

export default App;
