import React from 'react'
import fb_logo from '../../Images/fb.png'
import '../SignUpPage/SignUp.css'

function SignUp() {
  return (
    <div>
        <div>
        <img src={fb_logo} alt="" width="15px"/><button className="login__button">Log in with Facebook</button>
        </div>
        <div className="or__div">
            <div className="or__line"></div>
            <div className="login__or">OR</div> 
            <div className="or__line"></div>
        </div>
        <input className="input__text" placeholder="Mobile Number or Email"/>
        <input className="input__text" placeholder="Full Name"/>
        <input className="input__text" placeholder="Username"/>
        <input className="input__text" placeholder="Password"/>
        <button className="login__button">Sign Up</button>
    </div>
  )
}

export default SignUp