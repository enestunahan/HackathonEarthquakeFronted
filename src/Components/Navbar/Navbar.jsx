import React, { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  
  const[sticky , setSticky] = useState(false);
  
  useEffect(()=> {
      window.addEventListener("scroll", ()=> {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
  },[])
  
  return (
    <div className= {`navbar ${sticky ? 'darkNav' : ''}`}>
        <div className='links'>
            <ul>
                <li>Ana Sayfa</li>
                <li>Hakkımızda</li>
                <li>Projelerimiz</li>
                <li>Tecrübeler</li>
            </ul>
        </div>
    </div>
  )
}
