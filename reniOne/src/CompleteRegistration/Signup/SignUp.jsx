import React, { useState } from 'react'

import './Sign.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


// imported images
import logo from '../../assets/logo.png'
import image from '../../assets/bgimage.png'

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='signupSection'>

      <div className="img">
        <img src={image} className='Image' />
      </div>

      <div className="formSect">
        {/** the registration header */}
        <div className="header">

          <div className="reniLogo">
            <img src={logo} className='Logo' />
            <p className='graph'>RENI.One</p>
          </div>
          <p className='head'>Let's Get You Started</p>

        </div>

        <div className="flex">
          <form >
            <div className="name grid">
              <div className='inp-box'>
                <label>
                  First Name
                </label>
                <input type="text" placeholder='e.g Timothy' />
              </div>

              <div className='inp-box'>
                <label>
                  Last Name
                </label>
                <input type="text" placeholder='e.g Ayodele' />
              </div>
            </div>

            <div className='inp-box'>
              <label>
                Phone Number
              </label>
              <input type="text" placeholder='e.g 08123456789' />
            </div>

            <div className="name grid">
              <div className='inp-box'>
                <label>
                  Username
                </label>
                <input type="text" />
              </div>

              <div className='inp-box'>
                <label>
                  Gender
                </label>
                <select>
                  <option value="Male/Female">Male/Female</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer Not to say">Prefer Not To Say</option>
                </select>
              </div>
            </div>

            <div className='inp-box'>
              <label>
                Password
              </label>
              <input 
                     type={showPassword ? 'text' : 'password'}
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
              placeholder='e.g ***********' />
               <button
        type="button"
        onClick={togglePasswordVisibility}
        className="eyeIcon"
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </button>
            </div>

            <div className='inp-box'>
              <label className='inputes'>
                Confirm Password
              </label>
              <input 
                     type={showPassword ? 'text' : 'password'}
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
              placeholder='e.g ***********' />
               <button
        type="button"
        onClick={togglePasswordVisibility}
        className="eyeIcon"
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </button>
            </div>


            <div className="agreement">
              <input type="checkbox" id='check' />
              <p className='checkDiv'>I agree to the <span>Terms and Conditions,</span> as well as <span>Privacy and Policy</span></p>

            </div>

            <div className="buttonContainer">
              <button>Create account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp