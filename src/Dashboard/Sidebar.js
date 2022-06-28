import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    
    <div class="sidebar">
      <Link to="/home">
  <a class="active" href="#home">Home</a>
  </Link><hr/>
  <Link to="/warden">
  <a href="#warden">Warden</a>
  </Link><hr/>
  <Link to="/student">
  <a href="#student">Student</a>
  </Link><hr/>

  <Link to="/security">
  <a href="#security">Security</a>
  </Link><hr/>
</div>

  )
}

export default Sidebar