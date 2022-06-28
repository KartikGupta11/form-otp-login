import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import img from "./img.png"

const Login = () => {
  return (
    <div className="main">
      <div   className="image"><img style={{}}
        src={img}
        alt="img"
      /></div><br></br><br></br><br></br>
      <div className='welcome'>WELCOME</div>
      <form class="form">
        <h3 class="title">Log In</h3>
        <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, optio veritatis impedit iure sint ab tempore ducimus repudiandae nostrum odit!</p>
        <br></br>
        
          <div className='mobile'>Mobile Number</div>
          {/* <label htmlFor="phoneNumber">Mobile Number</label><br></br> */}
          <div class="mobile-input">
          <input placeholder="Enter phone number" name="phoneNumber" className="input" />
        </div>
        <Link to="/verification">
          <button className="submit">Send OTP</button>
        </Link>
      </form>

    </div>
  )
}

export default Login