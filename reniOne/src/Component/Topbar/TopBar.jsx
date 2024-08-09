import React, { useState } from 'react'

import './TopBar.css'
// Imported icons
import { AiOutlineBell } from 'react-icons/ai'

import { CgMenuGridR } from 'react-icons/cg'
import { FaChevronDown, FaChevronUp, FaRegCircle } from 'react-icons/fa';


const TopBar = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  }
  return (
    <div className='topbarSection'>
      <div className="iconContainer">
        <AiOutlineBell className='top-icon' />
      </div>
      <div className="circle">





        <div className="textContainer">
          <FaRegCircle className='circle-icon' />
          <div className="fire">
          <h3 className='top3'>Fireswitch Technologies </h3>
          
          <p className='top-graph' >Developer</p>
          </div>
      

          </div>
          <div onClick={toggleDropdown} className="topIcon">
            {dropdownVisible ? <FaChevronUp className='topArrow' /> : <FaChevronDown className='topArrow' />}


            {dropdownVisible && (
              <ul className='top-menu'>
                <li className='top-item'>
                <FaRegCircle className='circle_icon' />
                  Sheda House
                  </li>
                  <p className="lilText">
                  shedahouse.com
                  </p>
                
              

                <li className='top-item'>
                <FaRegCircle className='circle_icon' />
                  Renitechnologies
                </li>

                <p className="lilText">
                  renitechnologies.com
                  </p>
              </ul>
            )}

          </div>

       
        <div className="gridi">
          <CgMenuGridR className='second-icon' />
        </div>


      </div>

    </div>
  )
}

export default TopBar