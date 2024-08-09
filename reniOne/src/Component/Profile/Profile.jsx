import React, { useState, useRef } from 'react';
import DashboardLayout from '../../Layouts/DashboardLayout';
import './Profile.css';

// Imported icons
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import { IoWarningOutline } from 'react-icons/io5';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { IoMdImage } from 'react-icons/io';




const Profile = () => {
  const [selected, setSelected] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = (type) => {
    setSelected(type === selected ? null : type);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/png') {
      console.log('File accepted:', file);
      // Handle the file upload
    } else {
      alert('Please upload a PNG file.');
      event.target.value = ''; // Clear the input value
    }
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <DashboardLayout>
      <div className='main-profile'>
        <div className="profileSection">
          <h1>Billing</h1>
          <div className="profileContainer">
            <p>Current Plan</p>
            <span>Free</span>
            <button>Upgrade plan</button>
          </div>

          <div className="profileContain2">
            <p>Current Plan</p>
            <span className='paid'>Paid</span>
            <p className='profile-P'>Your next bill is for<span className='profile-s'>₦20,000 on June 1 2024</span> <br /> <small>
              Mastercard ending in 1111
            </small></p>
            <button>Update card</button>
          </div>
        </div>

        <div className="another-section">
          <h2>Account Information</h2>
          <div className="another-container">
            <div className="another">
              <label> Username</label>
              <input type="text" placeholder='Enter username' />
            </div>
            <div className="another-cont">
              <label>Email</label>
              <input type="text" placeholder='Enter email' />
            </div>
            <div className="password">
              <label className='Reset'>Password</label>
              <button className='btn_reset'>Reset Password</button>
            </div>
          </div>
        </div>
        <div className="thirdSection">
          <h2>Profile Information</h2>
          <div className="another-container">
            <div className="another">
              <label>First name</label>
              <input type="text" placeholder='Enter first name' />
            </div>
            <div className="another-cont">
              <label>Last name</label>
              <input type="text" placeholder='Enter last name' />
            </div>
            <div className="radio">
              <label>Account type</label>
              <div className="option" onClick={() => handleToggle('Developer')}>
                {selected === 'Developer' ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
                <p className='dev'>Developer</p>
              </div>
              <div className="options" onClick={() => handleToggle('Business')}>
                {selected === 'Business' ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
                <p className='devs'>Business</p>
              </div>
            </div>
          </div>
        </div>

        <div className="KYC">
          <h2>KYC</h2>
          <div className="another-container">
            <div className="kyc">
              <label> ID</label>
              <select>
                <option>NIN</option>
                <option>Driver's License</option>
                <option>International passport</option>
              </select>
              <p className='p-kyc'>Upload</p>
        <div className="upload-box" onClick={openFileDialog}>
        <span>MY NIN.png</span>
          <IoMdImage className="image-icon" />
         
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/png"
            onChange={handleFileUpload}
          />
        </div>
            </div>
            <div className="kyc-cont">
              <label>BVN</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='xxx xxxx'
                />
                <div className="eye-icon" onClick={toggleShowPassword}>
                  {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                </div>
              </div>
            </div>
            <div className="kyc-cont">
              <label>Address</label>
              <input type="password" placeholder='Enter Address' />
            </div>
            <div className="kycStatus">
              <label className='kyc-stats'>Status</label>
              <div className="kyC">
                <IoWarningOutline className='warn-icon' />
                <p className='warn'>Unverified</p>
                <button className='btn-kyc'>Verify</button>
              </div>
            </div>
          </div>
        </div>
        <div className="kyb-section">
          <h2>KYB</h2>
          <div className="kyb-container">
            <div className="kyb-item">
              <label  className="kyb-label">CAC Certificate <br /> No</label>
            <input className="kyb_input"  type="mail" placeholder='RC1234567' />
              {/* <p className='p-kyc'>Upload</p> */}
      
            </div>

            <div className="kyb-item">
              <label  className="kyb-label">Memorandum <br /> of Article</label>
            <input className="kyb-input"  type="mail" placeholder='My Memorandum Aritcle.png' />
              <p className='P-kyc'>Uploaded</p>
      
            </div>
            <div className="kyb-item">
      <label className="kyb-label">Registration <br /> Status</label>
     
        <input className="kyb-Input" type="mail" />
        <p className="kyb-upload-text">Upload</p>
     
    </div>
          
            <div className="kybStatus">
              <label className='kyb-stats'>Status</label>
              <div className="kyB">
                <IoWarningOutline className='warn-icon' />
                <p className='warn'>Unverified</p>
                <button className='btn-kyc'>Verify</button>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="danger">
          <h3>Danger Zone</h3>
          <div className="dang-container">
          <div className="dangerbox">
          <IoWarningOutline  className='danger-icon'/>
          <small className='p-danger'>Deleting your account is permanent 
            and cannot be undone. Your data will be
             deleted within 30 days,
              except we may retain some
               metadata and logs for
                longer where required or
                 permitted by law.</small>
          </div>
        
          <button className='danger-btn'>Request to Delete Account</button>
          </div>
         
        </div>
        </div>
        
      </div>
    </DashboardLayout>
  );
};

export default Profile;
