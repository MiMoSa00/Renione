import React from 'react'
import Sidebar from '../CompleteRegistration/Sidebar/Sidebar'
import TopBar from '../Component/Topbar/TopBar'

const DashboardLayout = ({ children }) => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{position: "relative"}}>
                <TopBar />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout