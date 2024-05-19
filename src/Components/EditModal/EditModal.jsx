import React, { useState } from 'react';
import './EditModal.css'


export default function EditModal({data , isOpen , onClose,  onSave , processName}) {
  

    if (!isOpen) return null;

    const [totalTent, setTotalTent] = useState(data ? data.totalNumberOfBed : 0 );
    const [fullTent,  setFullTent]  = useState(data ? data.numberOfBedUsed : 0);
    const [title , setTitle] = useState(data ? data.name : '');
    const [id , setId] = useState(data ? data.id : 0);


    const[districtId , setDistrictId] = useState(0);
    const[neighbourhoodId, setNeighbourhoodId] = useState(0);
    const[openAddress, setOpenAddress] = useState("");

  
    const handleSave = () => {
      onSave({ ...data, totalTent, fullTent , title , id , districtId , neighbourhoodId, openAddress });
      onClose();
    };
  
    return (
        <div className="modal-overlay">
        <div className="modal-content">
          <h2> {processName} </h2>
          <form>
          <div>
              <label>Başlık:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div>
              <label>Toplam Çadır:</label>
              <input
                type="input"
                value={totalTent}
                onChange={(e) => setTotalTent(e.target.value)}
              />
            </div>
            <div>
              <label>Dolu Çadır:</label>
              <input
                type="input"
                value={fullTent}
                onChange={(e) => setFullTent(e.target.value)}
              />
            </div>   

            {processName === "Ekle" ? (
              <>
                  <div>
          <label>İlçe İd</label>
          <input
            type="input"
            value={districtId}
            onChange={(e) => setDistrictId(e.target.value)}
          />
        </div>
        <div>
          <label>Mahalle İd</label>
          <input
            type="input"
            value={neighbourhoodId}
            onChange={(e) => setNeighbourhoodId(e.target.value)}
          />
        </div>
        <div>
          <label>Açık Adres</label>
          <input
            type="text"
            value={openAddress}
            onChange={(e) => setOpenAddress(e.target.value)}
          />
        </div>
              </>
    
        
      ) : null}

            <button type="button" onClick={handleSave}>Kaydet</button>
            <button type="button" onClick={onClose}>İptal</button>
          </form>
        </div>
      </div>
  )
}
