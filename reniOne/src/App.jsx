import React from 'react'

import Verify from './verification/Verify'
import SignUp from './CompleteRegistration/Signup/SignUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from './CompleteRegistration/Login/Login'
import Forgot from './CompleteRegistration/Forgot/Forgot'
import New from './CompleteRegistration/Newpassword/New'
// import Sidebar from './CompleteRegistration/Sidebar/Sidebar'
// import TopBar from './Component/Topbar/TopBar'
import Api from './Component/Api/Api'
import Web from './Component/Webhooks/Web'
// import DashboardLayout from './Layouts/DashboardLayout'
import Dashboard from './Component/Dash/Dashboard'
import Profile from './Component/Profile/Profile'
import Change from './Component/ChangePassword/Change'
function App() {


  return (
    <div>

       
      <Router>
         {/* <DashboardLayout /> */}
        <Routes>
          <Route index element={<Verify />} />
          <Route path='verify' element={<Verify />} />
          <Route path='dash' element={<Dashboard />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='log-in' element={<Login />} />
          <Route path='forgot' element={<Forgot />} />
          <Route path='forgot/new' element={<New />} />
          {/* <Route path='side-bar' element={<Sidebar />} /> */}
          {/* <Route path='dash-board' element={<Dashboard />} /> */}
          {/* <Route path='top' element={<TopBar />} /> */}
          <Route path='api' element={<Api />} />
          <Route path='profile' element={<Profile />} />
          <Route path='change' element={<Change />} />
          <Route path='webhooks' element={<Web />} />

        </Routes>
      </Router>


      {/* <SignIn /> */}
    </div>
  )
}

export default App
