import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Newpassword/New.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


// Imported Images
import logo from '../../assets/logo.png'
import backgroundImg from '../../assets/bgimage.png'

const New = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
        <div className='mainContainer'>
            <div className="imgContainer">
                <img src={backgroundImg} className='imgDiv' />
            </div>

            <div className="verifySection">
                <div className="formSect">
                    <div className="header">
                        <div className="logoDiv">
                            <img src={logo} className='Logo' />
                            <p className='graph'>RENI.One</p>
                        </div>
                        <h2 className='headerSection'>Create New Password</h2>

                    </div>

                    <div className="formSection">
                        <form>
                            <div className="formDiv">
                            
                                <div className='apt-box'>
                                    <label>
                                      New  Password
                                    </label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='***********' />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="eyesIcon"
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </button>
                                </div>

                                <div className='apt-box'>
                                    <label className='inputes'>
                                        Confirm New Password
                                    </label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
      value={password}
                     onChange={(e) => setPassword(e.target.value)}
                                        placeholder='***********' />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="eyesIcon"
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                            </div>

                           
              <div className="next">
                <Link to="/forgot/new">
                  <button className='reset'>Reset Password</button>
                </Link>
                </div>


                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default New