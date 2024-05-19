// src/Admin.jsx
import React, { useState } from 'react';
import './Admin.css';
import EditModal from '../EditModal/EditModal';

function Admin() {
  

    const[selectedPlace , setSelectedPlace] = useState(null);
    const[isModalOpen, setIsModalOpen] = useState(false);
    const[processName , setProcessName] = useState('');

    const meetingPlaces = [
        {id:1, title: 'Eyüp Toplanma Alanı 1' , totalTent : 10 , fullTent : 5 },
        {id:2, title: 'Eyüp Toplanma Alanı 1' , totalTent : 20 , fullTent : 10 },
        {id:3, title: 'Eyüp Toplanma Alanı 1' , totalTent : 30 , fullTent : 9 },
      ]

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

  const handleSave = (data) => {
    debugger;

    if(data.id ===0){
        // ekleme
    }
    if(data.id !==0){
        // güncelleme işlemi
    }
    
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
              <td>{place.title}</td>
              <td> {place.fullTent}</td>
              <td> {place.totalTent}</td>
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
