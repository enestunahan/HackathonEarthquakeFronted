import React, { useEffect } from 'react'
import './MeetingPlaceFilterResult.css'
import assemblyArea from '../../assets/images/toplanmaAlani.jpg'
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

export default function MeetingPlaceFilterResult(prop) {
 
    useEffect(()=> {
      AOS.init({duration: 1000});
    })

    const navigate = useNavigate();

    return (
    <div data-aos="fade-down" className='meetingPlaceFilterResult'>
        <h1> {prop.value.name} </h1>
        <img src={assemblyArea} alt="" />
        <button onClick={() => navigate(`/meetingPlaceDetail/${prop.value.id}`)}>Bilgi Al</button>
    </div>
  )
}
