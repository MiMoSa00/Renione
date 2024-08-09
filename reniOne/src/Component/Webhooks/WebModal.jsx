import React from 'react'
import  './WebModal.css';

const WebModal = ({ closeModal }) => {
  return (
    <div className='modal-backdrop'>
        <div className="webContent">
        <button className="Close_btn"  style={{backgroundColor:"transparent", justifyContent:"flex-end", color:"black"}} onClick={() =>  closeModal(false)}>X</button>

        <div className="hookBody">
            <h2>Edit webhook</h2>
            <label>Enter url for webhook</label>
            <input type="text" />

            <button className='hooks'>Connect webhook</button>
        </div>
              </div>

    </div>
  )
}

export default WebModal