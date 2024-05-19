import React, { useEffect, useState } from 'react'
import './MeetingPlace.css'
import Select from 'react-select'
import MeetingPlaceFilterResult from '../MeetingPlaceFilterResult/MeetingPlaceFilterResult';

export default function MeetingPlace() {
  
  const districts = [{id : 1 , name:'Eyüp'} , {id: 2 , name:'Kağıthane'}];
  const neighbourhoods = [
    {id :1 , districtId : 1 , name : 'Çırçır'}, 
    {id :2 , districtId : 1 , name : 'Karadolap'},
    {id :3 , districtId : 2 , name : 'Gürsel'}, 
    {id :4 , districtId : 2 , name : 'Nurtepe'},
    {id :5 , districtId : 2 , name : 'Gültepe'}, 
  ]

  const meetingPlaces = [
    {id:1 , districtId:1 , neighbourhoodId:1 , title: 'Eyüp Toplanma Alanı 1'},
    {id:2 , districtId:1 , neighbourhoodId:2 , title: 'Eyüp Toplanma Alanı 2'},
    {id:3 , districtId:1 , neighbourhoodId:1 , title: 'Eyüp Toplanma Alanı 3'},
  ]

  const [mahalleler , setMahalleler] = useState([]);
  const [selectedDistrict , setSelectedDistrict] = useState(null);
  const [selectedNeighbourhoods , setSelectedNeighbourhoods] = useState(null);
  const [data , setData] = useState([]);


  useEffect(() => {

    if(selectedDistrict){
        let data = neighbourhoods.filter(x=> x.districtId === selectedDistrict.value);
        setMahalleler(data);
        setSelectedNeighbourhoods(null);
    }

  },[selectedDistrict])

  const handleClick = () => {
      debugger;
      let districtId = selectedDistrict.value;
      let neighbourhoodId = selectedNeighbourhoods.value;
      let result = meetingPlaces.filter(x=> x.districtId === districtId && x.neighbourhoodId ===neighbourhoodId );
      setData(result);
  }
 
  return (
    <div className='meetingPlace'>
      
      <div className='filters'>
          <Select className='filter'
            value={selectedDistrict}
            onChange={setSelectedDistrict}
            options={districts.map(i => ({ value: i.id , label: i.name}))}
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
