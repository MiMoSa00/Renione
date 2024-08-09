import { useState } from  'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
// Imported Images
import logo from '../../assets/logo.png'
// Imported Icon
import {MdOutlineDashboard} from 'react-icons/md'
import {RiKeyLine} from 'react-icons/ri'
import {PiWebhooksLogoThin} from 'react-icons/pi'
import {IoDocumentTextOutline} from 'react-icons/io5'
import {MdOutlineSettings} from 'react-icons/md'
import {GoArrowUpRight} from 'react-icons/go'
import {AiOutlineUser } from 'react-icons/ai'
import {MdLockOutline } from 'react-icons/md'
import {RiLogoutBoxRLine  } from 'react-icons/ri'

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import TopBar from '../../Component/Topbar/TopBar'


const Sidebar = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <>
    {/* <TopBar /> */}
    <div className='newBar grids' >

      <div className='newDiv '>
      <img src={logo} className='Logo' />
      <h2>Reni.One</h2>
      </div>
      <div className='menuDiv'>
      
        <ul className='menuLists grids'>
         <li className="listings">
          <Link to="/dash" className="menuLink flexer">
          <MdOutlineDashboard className="icon"/>
          <small className="smallText">
            Dashboard
          </small>
          </Link>
          </li> 

         <li className="listings">
          <Link to="/api" className="menuLink flexer">
          <RiKeyLine className="icon"/>
          <small className="smallText">
          API
          </small>
          </Link>
          </li> 

         <li className="listings">
          <Link to="/webhooks" className="menuLink flexer">
         <PiWebhooksLogoThin className='icon'/>
          <small className="smallText">
            
            Webhooks
          </small>
          </Link>
          </li> 

         <li className="listings">
          <Link to="/" className="menuLink flexer">
          <IoDocumentTextOutline className="icon"/>
          <small className="smallText">
           Docs 
          </small>
          <GoArrowUpRight  className='iconic'/>
          </Link>
          </li> 
        </ul>
      
   
        <div className="dropdown">

<div className="newdrop">
<MdOutlineSettings className='icon' /> 
           
             <button onClick={toggleDropdown} className="dropdown-button">
           Settings
              {dropdownVisible ? <FaChevronUp className="icon-arrow" /> : <FaChevronDown className="icon-arrow" />}
            </button>
</div>
             
          
       

          {dropdownVisible && (
            <ul className="dropdown-menu">
              <Link to="/profile">
              <li className="dropdown-item"> <AiOutlineUser className='icon'/> Profile</li>
              </Link>
             <Link to="/change">
             <li className="dropdown-item">  <MdLockOutline className='icon'/> Change password</li>
             </Link>
             
            </ul>
          )}
        </div>
        <div className="logdiv">
          <RiLogoutBoxRLine   className='log-icon'/>
          <button className='logout'>Log Out</button>
        </div>
    
        </div>

    </div>
    </>
  )
}

export default Sidebar