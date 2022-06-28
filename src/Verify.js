import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import img from "./img.png"


const Verify = () => {
  return (
    <div className="main">
      <div   className="image"><img
        src={img}
        alt="img"
      /></div><br></br><br></br><br></br>
      <div className='welcome'>WELCOME</div>
      
      
        <form class="form">
      <h3 class="title">Verify OTP</h3>
      <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, optio veritatis impedit iure sint ab tempore ducimus repudiandae nostrum odit!</p>
      <br></br>
      <div class="">
        <h4 style={{marginLeft: "70px"}}>Mobile Number</h4>
      {/* <label htmlFor="phoneNumber">Mobile Number</label><br></br> */}
      <input type="text" name="otp" maxLength="1" className="box" />
      <input type="text" name="otp" maxLength="1" className="box" />
      <input type="text" name="otp" maxLength="1" className="box" />
      <input type="text" name="otp" maxLength="1" className="box" />
      <input type="text" name="otp" maxLength="1" className="box" />
      <input type="text" name="otp" maxLength="1" className="box" />
      
    </div>
    <Link to="/dashboard">
    <button className="submit">Verify</button>
    </Link>
      </form>
      
    </div>
  )
}
  

export default Verify