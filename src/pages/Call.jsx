import React from 'react'
import '../App.css'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Call() {
  return (
    <section>
    <div className="phone">
      <div className="phone__case">
        <div className="phone__screen">
        <Header></Header>
        <div className="phone__space">
          <div className="call__app">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>*</span>
            <span>0</span>
            <span>#</span>
          </div>
          <Link style={{zIndex: '100',position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX( -50%)'}} to='/'>Home</Link>
        </div>
        </div>
        <span>Everon</span>
      </div>
    </div>
  </section>
  )
}

export default Call