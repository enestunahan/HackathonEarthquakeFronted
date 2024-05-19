import React, { useState } from 'react';
import './EditModal.css'


export default function EditModal({data , isOpen , onClose,  onSave , processName}) {
  

    if (!isOpen) return null;

    const [totalTent, setTotalTent] = useState(data ? data.totalTent : 0 );
    const [fullTent,  setFullTent]  = useState(data ? data.fullTent : 0);
    const [title , setTitle] = useState(data ? data.title : '');
    const [id , setId] = useState(data ? data.id : 0);
  
    const handleSave = () => {
      onSave({ ...data, totalTent, fullTent , title , id });
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
            <button type="button" onClick={handleSave}>Kaydet</button>
            <button type="button" onClick={onClose}>İptal</button>
          </form>
        </div>
      </div>
  )
}
