import React, { useState } from 'react';
import DashboardLayout from '../../Layouts/DashboardLayout';
import './Web.css';
import WebModal from './WebModal';

// Imported icons
import { BsThreeDots } from 'react-icons/bs';
// import { IoWarningOutline } from 'react-icons/io5';
// import { IoMdEye } from 'react-icons/io';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


const Web = () => {

  const [openModal, setOpenModal] = useState(false);
  const apiData = [
    {
      apiName: "Reni Finance",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    },
    {
      apiName: "Reni Finance",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    },
    {
      apiName: "Reni Finance",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    },
    {
      apiName: "Reni Finance",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    },
    {
      apiName: "Reni Finance",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    },
    {
      apiName: "Reni Finance",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    },
    {
      apiName: "Reni Finance",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    }
  ];

  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const toggleDropdown1 = () => {
    setDropdownVisible1(!dropdownVisible1);
  };

  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const toggleDropdown2 = () => {
    setDropdownVisible2(!dropdownVisible2);
  };

  const [dropdownVisible3, setDropdownVisible3] = useState(
    new Array(apiData.length).fill(false)
  );

  const toggleDropdown3 = (index) => {
    setDropdownVisible3((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <DashboardLayout>
      <div className='webContainer'>
        <div className="webSection">
          <div className="api1">
            <h4 className='atext'>Webhooks</h4>
            <div className="apiSec">
              <BsThreeDots onClick={toggleDropdown1} className='api-icon' />
              {dropdownVisible1 && (
                <ul className='api-menu'>
                  <li style={{cursor:"pointer"}} className='api-item' onClick={() => {
                    setOpenModal(true)
                  }}>Edit webhook</li>
                  {openModal && <WebModal closeModal={setOpenModal}/> }
                  <li   style={{cursor:"pointer"}}  className='api-item'>Block webhook</li>
                </ul>
              )}
            </div>
          </div>

          <div className="hookSection">
            <div className="minText">
              <p className="texts">Name</p>
              <h3 className="secondText">Fireswitch Technologies LTD</h3>

            </div>

            <div className="mineText">
              <p className="texts">URL</p>
              <p className="anotherText">fireswitchlogy.com</p>

            </div>
            <div className="mintText">
              <p className="texting">Created</p>
              <h3 className="fourthText">18 May, 2024</h3>

            </div>


          </div>
        </div>


        <div className="web-Last">

          <h4 className='webtext'>Analytics</h4>


          <div className="text-section">
            <div className="lastText">
              <table width="100%">
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", width: "30%", color: "#757E9F", fontSize: "16px", fontWeight: "400" }}>Name</th>
                    <th style={{ textAlign: "center", width: "10%", color: "#757E9F", fontSize: "16px", fontWeight: "400" }}>Status</th>
                    <th style={{ textAlign: "left", color: "#757E9F", fontSize: "16px", width: "20%", fontWeight: "400" }}>Created Date</th>
                    <th style={{ textAlign: "left", width: "20%", marginLeft: "10px", color: "#757E9F", fontSize: "16px", fontWeight: "400" }}>Last Called</th>
                    <th style={{ textAlign: "right", width: "9%", color: "#757E9F", fontSize: "16px", fontWeight: "400" }}>Show more</th>
                  </tr>
                </thead>
                <tbody>
                  {apiData.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td>{item.apiName}</td>
                        {/* <td>{item.Token}</td> */}
                        <td >
                          <div style={{
                            color: "white",
                            width: "79%", backgroundColor: "#12B76A", textAlign: "center", borderRadius: "999px", marginLeft: "2px", marginTop: "8px"
                          }}>
                            {item.status}
                          </div>
                        </td>
                        <td >{item.Time}</td>
                        <td>{item.Date}</td>
                        <td onClick={() => toggleDropdown3(index)} >
                          {dropdownVisible3[index] ? <IoIosArrowUp style={{ marginLeft: "3rem", color: "#757E9F", fontSize: "24px" }} /> : <IoIosArrowDown style={{ marginLeft: "6rem", color: "#757E9F", fontSize: "24px" }} />}
                        </td>
                      </tr>
                      {dropdownVisible3[index] && (
                        <tr className='ip-container' >
                          <td colSpan="1">
                            <p className='ip' style={{ marginTop: "-.2rem", color: "#757E9F" }}>IP Address: <span style={{ color: "black", fontWeight: "500", fontSize: "16px" }}>{item.description[0].ip}</span></p>
                            <p className='ip' style={{ marginLeft: "16rem", marginTop: "-2.3rem", color: "#757E9F" }}>Duration: <span style={{ color: "black", fontWeight: "500", fontSize: "16px" }}>{item.description[0].Duration}</span></p>
                            <p className='ip' style={{ marginLeft: "29rem", marginTop: "-2rem", color: "#757E9F" }}>Status Code: <span style={{ color: "black", fontWeight: "500", fontSize: "16px" }}>{item.description[0].statusCode}</span></p>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mid-Container">
          <div className="api1">
            <h4 className='atext'>Webhook Stats</h4>
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
    </DashboardLayout>
  );
}

export default Web;
