import React from 'react'
import DashboardLayout from '../../Layouts/DashboardLayout'
import "./Change.css"

const Change = () => {
  return (
    <DashboardLayout>
  <div className='changeSection'>
    <div className="changeContainer">
        <h3>Change Password</h3>

        <div className="changeForm">
            <label>Old Password</label>
            <input type="oldpassword" />
            <label>New Password</label>
            <input type="newpassword" />
        </div>
        <button className='btn-change'>Change Password</button>
    </div>
        
        </div>
        </DashboardLayout>
  
  )
}

export default Change