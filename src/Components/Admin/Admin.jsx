// src/Admin.jsx
import React, { useEffect, useState } from 'react';
import './Admin.css';
import EditModal from '../EditModal/EditModal';
import axios, { Axios } from 'axios';

function Admin() {
  

    const[selectedPlace , setSelectedPlace] = useState(null);
    const[isModalOpen, setIsModalOpen] = useState(false);
    const[processName , setProcessName] = useState('');


    const[meetingPlaces , setMeetingPlaces] = useState([]);

    const getDatas = async()=> {
        let result = await axios.get("https://localhost:7159/api/MeetingPlace");
        setMeetingPlaces(result.data.data);
    }

    useEffect(()=> {
      getDatas();
    },[])


  const handleEdit = (place) => {
    setSelectedPlace(place);
    setProcessName("Güncelle");
    setIsModalOpen(true);
  }

  const handleAdd = () => {
    setIsModalOpen(true);
    setProcessName("Ekle");
    setSelectedPlace(null);
  }

  const handleSave = async (data) => {

   

    if(data.id ===0){

        let dto ={
          name : data.title,
          totalNumberOfBed: data.totalTent,
          numberOfBedUsed: data.fullTent,
          cityId:1,
          districtId: data.districtId,
          neighbourhoodId: data.neighbourhoodId,
          openAddress : data.openAddress
        }
   
        let result = await axios.post("https://localhost:7159/api/MeetingPlace",dto);

    }

    if(data.id !==0){

      let dto = {
        id : data.id,
        name : data.title,
        totalNumberOfBed: parseInt(data.totalTent),
        numberOfBedUsed: parseInt(data.fullTent),
  
      }

      let result = await axios.put("https://localhost:7159/api/MeetingPlace/update",dto);
     
    }
    getDatas();
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <button onClick={handleAdd}> Toplanma Alanı Ekle </button>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Başlık</th>
            <th>Toplam Çadır</th>
            <th>Dolu Çadır</th>
            <th>Güncelle</th>
          </tr>
        </thead>
        <tbody>
          {meetingPlaces.map(place => (
            <tr key={place.id}>
              <td>{place.id}</td>
              <td>{place.name}</td>
              <td> {place.totalNumberOfBed}</td>
              <td> {place.numberOfBedUsed}</td>
              <td> <button onClick={()=> handleEdit(place)}>Düzenle</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
        
     <EditModal
        data= {selectedPlace}
        isOpen={isModalOpen}
        onClose={()=> setIsModalOpen(false)}
        onSave={handleSave}
        processName = {processName}
     />

    </div>
  );
}

export default Admin;
