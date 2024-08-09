import React, { useState } from 'react';
import DashboardLayout from '../../Layouts/DashboardLayout';
import Modal from './Modal';
import './dash.css';

// imported images
import dash from "../../assets/logo.png";

// Imported icons
import { BsThreeDots } from 'react-icons/bs';
// import { IoWarningOutline } from 'react-icons/io5';
import { IoMdEye } from 'react-icons/io';
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';


const Dashboard = () => {
 const [openModal, setOpenModal] = useState(false); 



 

  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const toggleDropdown1 = () => {
    setDropdownVisible1(!dropdownVisible1);
  };

  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const toggleDropdown2 = () => {
    setDropdownVisible2(!dropdownVisible2);
  };

  // const [dropdownVisible3, setDropdownVisible3] = useState(
  //   new Array(apiData.length).fill(false)
  // );

  // const toggleDropdown3 = (index) => {
  //   setDropdownVisible3((prevState) => {
  //     const newState = [...prevState];
  //     newState[index] = !newState[index];
  //     return newState;
  //   });
  // };

  const [dropdownVisible4, setDropdownVisible4] = useState(false);
  const toggleDropdown4 = () => {
    setDropdownVisible4(!dropdownVisible4);
  };

  return (
    <DashboardLayout>
      <div className='Dash-container'>
        <div className="dashContainer">
          <div className="dashSection">
            <p>Wallet Balance</p>
            <h2>0.00</h2>
            <p>Kuda Bank (1234 2345 7890)</p>
          </div>

          <div className="dashlogos">
            <p>Tools</p>
            <img src={dash} alt="Tool" />
            <img src={dash} alt="Tool" />
            <img src={dash} alt="Tool" />
            <img src={dash} alt="Tool" />
            <img src={dash} alt="Tool" />
          </div>
        </div>
        
        <div className="businessSection">
          <div className="business">
            <h2>Business</h2>
            <button onClick={() => {
              setOpenModal(true)
            }}>Create New Business <GoPlus className='dashIcon' /> </button>
         {openModal && <Modal closeModal={setOpenModal}/>}
          </div>
          <div className="busy">
            <h5>Fireswitch Technologies LTD</h5>
            <a href="https://www.fireswitch.tech">https://www.fireswitch.tech</a>
            <BsThreeDots onClick={toggleDropdown4} className='dash-icon' />
            {dropdownVisible4 && (
              <ul className='dash-menu'>
                <li className='api-item'>Unlink Business</li>
                <li className='api-item'>Edit Business</li>
              </ul>
            )}
          </div>
        </div>

        <div className="dash_Section">
          <div className="api1">
            <h4 className='atext'>API</h4>
            <div className="apiSec">
              <BsThreeDots onClick={toggleDropdown1} className='api-icon' />
              {dropdownVisible1 && (
                <ul className='api-menu'>
                  <li className='api-item'>Generate new API</li>
                  <li className='api-item'>Block API</li>
                </ul>
              )}
            </div>
          </div>
         
          <div className="textSection">
            <div className="minText">
              <p className="texts">Name</p>
              <h3 className="dashText">Fireswitch Technologies LTD</h3>
              <h3 className="dashText">Fireswitch Technologies LTD - Test</h3>
            </div>
            <div className="miniText">
              <p className="test">Type</p>
              <button className='apiBut'>Live Key</button>
              <br />
              <button className="api-But">Test Key</button>
            </div>
            <div className="mineText">
              <p className="texts">Key</p>
              <p className="anotherText">XXXX XXXX XXXX</p>
              <p className="anotherText">XXXX XXXX XXXX</p>
            </div>
            <div className="mintText">
              <p className="texting">Created</p>
              <h3 className="fourthText">18 May, 2024</h3>
              <h3 className="fourthText">18 May, 2024</h3>
            </div>
            <div className="minyText">
              <p className="texts">View</p>
              <div className="eyer">
              <IoMdEye className='api_icon' />
              <br />
              <IoMdEye className='api_icon' />
              </div>
              
            </div>
          </div>
        </div>

        <div className="mid_Container">
          <div className="api1">
            <h4 className='atext'>API Stats</h4>
            <div className="apiSec">
              <BsThreeDots onClick={toggleDropdown2} className='api-icon' />
              {dropdownVisible2 && (
                <ul className='api_menu'>
                  <li className='api-item'>Hide</li>
                </ul>
              )}
            </div>
          </div>
          <div className="apiBoxs">
            <div className="box1">
              <h3 className="miniBox">80</h3>
              <p className="apimini">API Calls</p>
            </div>
            <div className="box2">
              <h3 className="miniBox">60</h3>
              <p className="api-mini">Success</p>
            </div>
            <div className="box3">
              <h3 className="miniBox">10</h3>
              <p className="api_mini">Fails</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
   
    </DashboardLayout>
  );
};

export default Dashboard;
