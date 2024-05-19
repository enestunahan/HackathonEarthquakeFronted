import React, { useState } from 'react';
import './EditModal.css'


export default function EditModal({data , isOpen , onClose,  onSave}) {
  
    debugger;

    if (!isOpen) return null;


    const [totalTent, setTotalTent] = useState(data.totalTent);
    const [fullTent,  setFullTent]  = useState(data.fullTent);
    const [title , setTitle] = useState(data.title);
    
  
    const handleSave = () => {
        debugger;
      onSave({ ...data, totalTent, fullTent , title });
      onClose();
    };
  
    return (
        <div className="modal-overlay">
        <div className="modal-content">
          <h2>Güncelle</h2>
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
            <button type="button" onClick={handleSave}>Kaydet</button>
            <button type="button" onClick={onClose}>İptal</button>
          </form>
        </div>
      </div>
  )
}
