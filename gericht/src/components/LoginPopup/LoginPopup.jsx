import React, { useState } from 'react'
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './LoginPopup.css'
const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <MdOutlineRestaurantMenu onClick={()=>setShowLogin(false)} fontSize={27} className='login-popup__close' alt=""></MdOutlineRestaurantMenu>
            </div>
            <div className="login-popup-input">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button className='login-popup-button'>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By proceeding, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"?<p>Create a new account? 
                <span onClick={()=> setCurrState("Sign Up")}>Click Here</span></p>:<p>Already have an account? 
                <span onClick={()=> setCurrState("Login")}>Login Here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup