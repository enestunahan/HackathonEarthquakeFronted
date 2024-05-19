import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import assemblyArea from '../../assets/images/toplanmaAlani.jpg'
import './MeetingPlaceDetail.css'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import axios, { Axios } from 'axios';

export default function MeetingPlaceDetail() {
 
  debugger;
  const {placeId} = useParams();
  const navigate = useNavigate();

  const[data , setData] = useState('');

  const getData = async()=>{

    debugger;

    let result = await axios.get(`https://localhost:7159/api/MeetingPlace/${placeId}`);
    setData(result.data.data);
  }

  useEffect(()=> {

    getData();

    AOS.init({duration: 1000});

  },[])
 
  return (
    <div data-aos="fade-down" className='meetingPlaceDetail'>

      <div className='meetingPlaceDetailImg'>
            <img src={assemblyArea} alt="" />
      </div>

      <div className='info'>
        <h1> {data.name} </h1>
        <p>İlçe : {data.districtName}</p>
        <p>Mahalle : {data.neighbourhoodName} </p>
        <p>Açık Adres : {data.openAddress} </p>
        <p>Çadır Doluluk Oranı : {data.solidityRatio} % </p>
      </div>

      <div>
        <button onClick={() => navigate(-1)}> Filtreleme Sayfasına Dön </button>
      </div>

    </div>
  )
}
