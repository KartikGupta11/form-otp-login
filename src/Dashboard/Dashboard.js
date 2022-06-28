import React from 'react'
import DataTable from './DataTable'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import "./Dashboard.css"

const Dashboard = () => {
    return (
        // <div>Dashboard
        //     <Sidebar/>
        //     <DataTable />
        <div className="mainDash">

            < Navbar />
            <div className='dash2'>
                
                <div className='sidebar'><Sidebar /></div>
                <div className='datatable'><DataTable /></div>
                
                
                
                
        
                
            </div>
        </div>
    )
}

export default Dashboard