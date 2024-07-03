import React from 'react'
import { useEffect, useState } from 'react';
import '../App.css'

function Header() {

    const [time, setTime] = useState(new Date());


    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
  
      return () => clearInterval(interval);
    }, []);
  
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
  
  
  
    const timeString = `${hours}:${minutes}`
  

  return (
    <>
    
                <header className='header'>
                   <span>{hours}:{minutes}</span>
                   <div className="right">
                    <div className="mobile__connection">
                        <span className="connection__element1 connection__element"></span>
                        <span className="connection__element2 connection__element"></span>
                        <span className="connection__element3 connection__element"></span>
                        <span className="connection__element4 connection__element"></span>
                    </div>
                    <div className="mobile__connection">
                        <span className="connection__element1 connection__element"></span>
                        <span className="connection__element2 connection__element"></span>
                        <span className="connection__element3 connection__element"></span>
                        <span className="connection__element4 connection__element"></span>
                    </div>
                    <div className="acc">
                        <span className="acc__element"></span>
                    </div>
                   </div>
                </header>
    </>
  )
}

export default Header