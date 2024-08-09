// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ closeModal }) => {


    return (
        <div className="modal-backdrop">
            <div className="modal-content">
            <div className="">
                <button className="Closebtn"  style={{backgroundColor:"transparent", justifyContent:"flex-end", color:"black"}} onClick={() =>  closeModal(false)}>X</button>
                </div>
                <div className="modalBody">
                <h2>Business Information</h2>
                    <form >
                        <label>Business Name</label>
                        <input type="text" placeholder='Enter your business name' />

                        <label>Business Phone Number</label>
                        <input type="text" placeholder='Enter your business phone number' />

                        <label>Number of Employees </label>
                        <input type="text" placeholder='Enter your number of employees' />

                        <label>Business Description</label>
                     <textarea  id="text"
                     placeholder='Enter your business description'
        
        rows="10"
        cols="50" />

                        <label>Address of the Business</label>
                       <input type="text" placeholder='Enter your business’s address' />
                    </form>
                </div>
                <div className="modalFooter" style={{marginLeft:"1rem"}}>
                    <button  style={{width:"90%",  padding:"0", alignItems:"center", justifyContent:"center"}}>Create Business</button>
                    </div>
            </div>
        </div>
    );
};

export default Modal;
