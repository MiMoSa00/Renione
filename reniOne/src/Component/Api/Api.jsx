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
    <div className='parent'>
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
              <div className="oldName">
              <p className="texts">Name</p>
              <h3 className="dashText">Fireswitch Technologies LTD</h3>
              </div>
            
              <div className="newapis">
              <p className="textz">Name</p>
              <h3 className="dashText">Fireswitch Technologies LTD </h3>
              </div>
             
            </div>
            <div className="miniText">
              <div className="oldType">
              <p className="test">Type</p>
              <button className='apiBut'>Live Key</button>
              </div>
            
              <br />
              <div className="new-Type">
              <p className="testz">Type</p>
              <button className="api-But">Test Key</button>
              </div>
             
            </div>
            <div className="mineText">
              <div className="oldKeys">
              <p className="texts">Key</p>
              <p className="anotherText">XXXX XXXX XXXX</p>
              </div>
              
              <div className="new-Key">
              <p className="textz">Key</p>
              <p className="anotherText">XXXX XXXX XXXX</p>
              </div>
             
            </div>
            <div className="mintText">
              <div className="oldCreate">
              <p className="texting">Created</p>
              <h3 className="fourthText">18 May, 2024</h3>
              </div>
              
              <div className="new-Create">
              <p className="textingx">Created</p>
              <h3 className="fourthText">18 May, 2024</h3>
              </div>
             
            </div>
            <div className="minyText">
              <div className="oldViews">
              <p className="texts">View</p>
              <div className="eyer">
              <IoMdEye className='api_icon' />
              </div>
            {/* <div className="divider">
             ------------------------------------------------------ 
            </div> */}
              <br />
              <div className="new-Views">
              <p className="textz">View</p>
              <IoMdEye className='api__icon' />
              </div>
             
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
                  <tr className='tr'>
                    <th className='th' style={{ textAlign: "left", width: "30%", color:"#757E9F", fontSize:"16px", fontWeight:"400"}}>Name</th>
                    <th className='ths' style={{ textAlign: "left", width: "27%", color:"#757E9F", fontSize:"16px", fontWeight:"400" }}>Token</th>
                    <th className='th' style={{ textAlign: "left", width: "10%",color:"#757E9F", fontSize:"16px", fontWeight:"400" }}>Status</th>
                    <th className='ths' style={{ textAlign: "left", color:"#757E9F", fontSize:"16px", fontWeight:"400" }}>Date</th>
                    <th className='th' style={{ textAlign: "left", color:"#757E9F", fontSize:"16px", fontWeight:"400" }}>Show more</th>
                  </tr>
                </thead>
                <tbody>
                  {apiData.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr className='tr'>
                        <td className='api-name' >{item.apiName}</td>
                        <td className='ths'>{item.Token}</td>
                        <td className='tds'>
                            <div className='tide' style={{color:"white", 
                          width:"76px" ,backgroundColor:"#12B76A", textAlign:"center", borderRadius:"999px", marginLeft:"-9px", marginTop:"8px"}}>
                             {item.status}
                          </div>
                           </td>
                        <td className='ths'>{item.Time}</td>
                        <td className='td' onClick={() => toggleDropdown3(index)} >
                          {dropdownVisible3[index] ? <IoIosArrowUp style={{ marginLeft:"3rem", color:"#757E9F", fontSize:"24px"}}/> : <IoIosArrowDown style={{ marginLeft:"3rem", color:"#757E9F", fontSize:"24px"}}/>}
                        </td>
                      </tr>
                      {dropdownVisible3[index] && (
                        <tr className='ip-container' >
                          <td colSpan="10">
                            <p className='ip' style={{color:"#757E9F", marginLeft: ".5rem"}}>IP Address: <span className='ips' style={{color:"black", fontWeight:"500", fontSize:"16px"}}>{item.description[0].ip}</span></p>
                            <p className='ipe'  style={{marginLeft:"16rem", marginTop:"-1.5rem", color:"#757E9F"}}>Duration: <span className='ips' style={{color:"black", fontWeight:"500", fontSize:"16px"}}>{item.description[0].Duration}</span></p>
                            <p className='ip' style={{marginLeft:"29rem", marginTop:"-1.8rem", color:"#757E9F"}}>Status Code: <span className='ips' style={{color:"black", fontWeight:"500", fontSize:"16px"}}>{item.description[0].statusCode}</span></p>
                            <p className='ipi' style={{marginLeft:"29rem", marginTop:"-1.8rem", color:"#757E9F"}}>Token: <span className='ipsi' style={{color:"black", fontWeight:"500", fontSize:"16px"}}>{item.Token}</span></p>
                            <p className='ipi' style={{marginLeft:"29rem", marginTop:"-1.8rem", color:"#757E9F"}}>Date: <span className='ipsi' style={{color:"black", fontWeight:"500", fontSize:"16px"}}>{item.Time}</span></p>
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
    </div>
   
  );
}

export default Api;
