import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import assemblyArea from '../../assets/images/toplanmaAlani.jpg'
import './MeetingPlaceDetail.css'

export default function MeetingPlaceDetail() {
 
  debugger;
  const {placeId} = useParams();

  const[data , setData] = useState('');

  const meetingPlaces = [
    {id:1 , district: 'Eyüp' , neighbourhood:'Çırçır' , openAddress:'Çırçır mah. deneme sok. Eyüp/İstanbul' , title: 'Eyüp Toplanma Alanı 1' , tentOccupancyRate : 10},
    {id:2 , district: 'Eyüp' , neighbourhood:'Çırçır' , openAddress:'Çırçır mah. deneme sok. Eyüp/İstanbul' , title: 'Eyüp Toplanma Alanı 1' , tentOccupancyRate : 20},
    {id:3 , district: 'Eyüp' , neighbourhood:'Çırçır' , openAddress:'Çırçır mah. deneme sok. Eyüp/İstanbul' , title: 'Eyüp Toplanma Alanı 1' , tentOccupancyRate : 30},
  ]

  useEffect(()=> {
    let result = meetingPlaces.find(x=> x.id === parseInt(placeId));
    setData(result);
  },[])
 
  return (
    <div className='meetingPlaceDetail'>

      <div className='meetingPlaceDetailImg'>
            <img src={assemblyArea} alt="" />
      </div>

      <div className='info'>
        <h1> {data.title} </h1>
        <p>İlçe : {data.district}</p>
        <p>Mahalle : {data.neighbourhood} </p>
        <p>Açık Adres : {data.openAddress} </p>
        <p>Çadır Doluluk Oranı : {data.tentOccupancyRate} % </p>
      </div>

    </div>
  )
}
