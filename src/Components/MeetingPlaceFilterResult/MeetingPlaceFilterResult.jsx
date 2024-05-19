import React from 'react'
import './MeetingPlaceFilterResult.css'
import assemblyArea from '../../assets/images/toplanmaAlani.jpg'
import { useNavigate } from 'react-router-dom';

export default function MeetingPlaceFilterResult(prop) {
 
    debugger;

    const navigate = useNavigate();

    return (
    <div className='meetingPlaceFilterResult'>
        <h1> {prop.value.title} </h1>
        <img src={assemblyArea} alt="" />
        <button onClick={() => navigate(`/meetingPlaceDetail/${prop.value.id}`)}>Bilgi Al</button>
    </div>
  )
}
