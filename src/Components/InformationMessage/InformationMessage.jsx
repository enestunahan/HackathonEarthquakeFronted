import React, { useEffect } from 'react'
import './InformationMessage.css'
import 'aos/dist/aos.css'; 
import AOS from 'aos';

export default function InformationMessage(props) {
  
  useEffect(()=> {
    AOS.init({
      duration: 1000,
    });
  },[]);
  
  return (
    <div data-aos="fade-up" className = {`informationMessage ${props.className}`} >
        <div className='informationMessageContent'>
            <div className='informationMessageTitle'>
                <h1> {props.title} </h1>            
            </div>
            <div className='informationMessageBody'>
                 <img src={props.image} alt="" />
                 <p>{props.message}</p>
            </div>
        </div>
    </div>
  )
}
