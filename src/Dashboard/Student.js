import React from 'react'
import DataTable from './DataTable'
import Heading from './Heading'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Student = () => {
  return (
    <div style={{backgroundColor:"#e3eeff"}}>
      <Navbar/>
      <Sidebar/>
      <Heading text="Student Profile" />
      <DataTable/>




    </div>
  )
}

export default Student