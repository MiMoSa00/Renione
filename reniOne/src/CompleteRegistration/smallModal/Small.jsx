import React, { useState } from 'react';
import lago from '../../assets/logo.png'
import './Small.css'

const Small = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="modal-menu">
      <div className="hamburger-menu" onClick={toggleModal}>
        {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="logo">
              <img src={lago} className='Logi' />
                <span>Reni.One</span>
              </div>
            </div>
            <ul className="menu-list">
              <li>Dashboard</li>
              <li>API</li>
              <li>Webhooks</li>
              <li>Docs</li>
              <li className="settings">
                Settings
                <ul className="settings-dropdown">
                  <li>Profile</li>
                  <li>Change Password</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Small;
