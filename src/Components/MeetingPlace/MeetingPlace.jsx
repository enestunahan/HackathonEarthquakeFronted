import React, { useEffect, useState } from 'react'
import './MeetingPlace.css'
import Select from 'react-select'
import MeetingPlaceFilterResult from '../MeetingPlaceFilterResult/MeetingPlaceFilterResult';
import axios from 'axios';

export default function MeetingPlace() {

  const[districtsData , setDistrictsData] = useState([]);
  const[neighbourhoodsData , setNeighbourhoodsData ] = useState([]);

  const fetchData = async() => {
      let districtsList = await axios.get('https://localhost:7159/api/District');
      let neighbourhoodsList = await axios.get('https://localhost:7159/api/Neighbourhood');
      setDistrictsData(districtsList.data.data);
      setNeighbourhoodsData(neighbourhoodsList.data.data);
    
  }

  const [mahalleler , setMahalleler] = useState([]);
  const [selectedDistrict , setSelectedDistrict] = useState(null);
  const [selectedNeighbourhoods , setSelectedNeighbourhoods] = useState(null);
  const [data , setData] = useState([]);

  useEffect(() => {

    fetchData();

  },[]);


  useEffect(() => {

    if(selectedDistrict){
        let data = neighbourhoodsData.filter(x=> x.districtId === selectedDistrict.value);
        setMahalleler(data);
        setSelectedNeighbourhoods(null);
    }

  },[selectedDistrict])

  const handleClick = async () => {
      let districtId = selectedDistrict.value;
      let neighbourhoodId = selectedNeighbourhoods.value;

      let result = await axios.get(`https://localhost:7159/api/MeetingPlace/1/${districtId}/${neighbourhoodId}`);
      setData(result.data.data);
  }
 
  return (
    <div className='meetingPlace'>
      
      <div className='filters'>
          <Select className='filter'
            value={selectedDistrict}
            onChange={setSelectedDistrict}
            options={districtsData.map(i => ({ value: i.id , label: i.name}))}
            placeholder = "İlçe Seçin"
          />

          <Select className='filter'
            value={selectedNeighbourhoods}
            onChange={setSelectedNeighbourhoods}
            options={mahalleler.map(i=> ({ value: i.id , label: i.name }))}
            placeholder = "Mahalle Seçin"
            isDisabled =  {!selectedDistrict}
          />

          <button className='filterButton' onClick={handleClick}> Ara </button>
      </div>
      

      <div className='filterResult'>
          {data.length > 0 ? (
            data.map((item, index) => (
              <MeetingPlaceFilterResult key={index} value={item} />
            ))
          ) : (
            'Bu kriterlerde toplanma alanı bulunamamıştır'
          )}
      </div>

     
    </div>
  )
}
