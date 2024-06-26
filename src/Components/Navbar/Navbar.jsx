import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

export default function Navbar() {
  
  const[sticky , setSticky] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(()=> {
      window.addEventListener("scroll", ()=> {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })

      AOS.init({
        duration: 1000
      });

  },[])
  
  return (
    <div data-aos="fade-down" className= {`navbar ${sticky == true || isHome == false ? 'darkNav' : ''}`}>
        <div className='links'>
            <ul>
                <li> <Link to='' className='link'> Ana Sayfa </Link>      </li>
                <li>Hakkımızda</li>
                <li>  <Link to='/meetingPlace' className='link'> Toplanma Alanı </Link> </li>
                <li>Tecrübeler</li>
            </ul>
        </div>
    </div>
  )
}
