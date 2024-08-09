import React, { useState } from 'react';
import DashboardLayout from '../../Layouts/DashboardLayout';
import './Api.css';

// Imported icons
import { BsThreeDots } from 'react-icons/bs';
import { IoWarningOutline } from 'react-icons/io5';
import { IoMdEye } from 'react-icons/io';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Api = () => {
  const apiData = [
    {
      apiName: "Reni Finance",
      Token: "XXXX XXXX XXXX",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
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
      Token: "XXXX XXXX XXXX",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
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
      Token: "XXXX XXXX XXXX",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
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
      Token: "XXXX XXXX XXXX",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
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
      <div className='apiContainer'>
        <div className="apiSection">
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
          <div className="apiText">
            <IoWarningOutline className="apiIcon" />
            <p className="apiWarning">
              Api tokens can be used to control your whole account and use features added in the future. Be careful when using them!
            </p>
          </div>
          <div className="textSection">
            <div className="minText">
              <p className="texts">Name</p>
              <h3 className="secondText">Fireswitch Technologies LTD</h3>
              <h3 className="secondText">Fireswitch Technologies LTD - Test</h3>
            </div>
            <div className="miniText">
              <p className="test">Type</p>
              <div className="API">
              <button className='apiBut'>Live Key</button>
              <br />
              <button className="api-But">Test Key</button>
              </div>
              
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

        <div className="midContainer">
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

        <div className="lastContainer">
          <div className="lastSection">
            <h4 className='atext'>Analytics</h4>
            <IoMdEye className='api_icon' />
          </div>
          <div className="text-section">
            <div className="lastText">
              <table width="100%">
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", width: "30%", color:"#757E9F", fontSize:"16px", fontWeight:"400"}}>Name</th>
                    <th style={{ textAlign: "left", width: "27%", color:"#757E9F", fontSize:"16px", fontWeight:"400" }}>Token</th>
                    <th style={{ textAlign: "left", width: "10%",color:"#757E9F", fontSize:"16px", fontWeight:"400" }}>Status</th>
                    <th style={{ textAlign: "left", color:"#757E9F", fontSize:"16px", fontWeight:"400" }}>Date</th>
                    <th style={{ textAlign: "left", color:"#757E9F", fontSize:"16px", fontWeight:"400" }}>Show more</th>
                  </tr>
                </thead>
                <tbody>
                  {apiData.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td>{item.apiName}</td>
                        <td>{item.Token}</td>
                        <td >
                            <div style={{color:"white", 
                          width:"76px" ,backgroundColor:"#12B76A", textAlign:"center", borderRadius:"999px", marginLeft:"-9px", marginTop:"8px"}}>
                             {item.status}
                          </div>
                           </td>
                        <td>{item.Time}</td>
                        <td onClick={() => toggleDropdown3(index)} >
                          {dropdownVisible3[index] ? <IoIosArrowUp style={{ marginLeft:"3rem", color:"#757E9F", fontSize:"24px"}}/> : <IoIosArrowDown style={{ marginLeft:"3rem", color:"#757E9F", fontSize:"24px"}}/>}
                        </td>
                      </tr>
                      {dropdownVisible3[index] && (
                        <tr className='ip-container' >
                          <td colSpan="1">
                            <p className='ip' style={{marginTop:"-.2rem", color:"#757E9F"}}>IP Address: <span style={{color:"black", fontWeight:"500", fontSize:"16px"}}>{item.description[0].ip}</span></p>
                            <p className='ip'  style={{marginLeft:"16rem", marginTop:"-2.3rem", color:"#757E9F"}}>Duration: <span style={{color:"black", fontWeight:"500", fontSize:"16px"}}>{item.description[0].Duration}</span></p>
                            <p className='ip' style={{marginLeft:"29rem", marginTop:"-2rem", color:"#757E9F"}}>Status Code: <span style={{color:"black", fontWeight:"500", fontSize:"16px"}}>{item.description[0].statusCode}</span></p>
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
      </div>
    </DashboardLayout>
  );
}

export default Api;
