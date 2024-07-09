import React, {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {

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
      <section className='phone'>
        <header>
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
        <Outlet>

        </Outlet>
        <footer>
           <Link to='/'> <button className='go__home'></button></Link>
        </footer>
      </section>
    </>
  )
}

export default Layout
