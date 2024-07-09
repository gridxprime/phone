import React from 'react'
import Backspace from './others/backspace.png'
import PhoneCall from './AppsIcons/call.png'

function Call() {
  return (
    <>
    <section className='call__app'>
   
        <img className='backspace' src={Backspace} alt="" />
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>*</li>
            <li>0</li>
            <li>#</li>
            <li></li>
            <li><img className='ul__call' src={PhoneCall} alt="" /></li>
            <li></li>
        </ul>

    </section>
    </>
  )
}

export default Call
