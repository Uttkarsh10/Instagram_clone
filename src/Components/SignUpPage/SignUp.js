import React from 'react'
import '../SignUpPage/SignUp.css'

function SignUp() {
  return (
    <div>
        <input className="input__text" placeholder="Mobile Number or Email"/>
        <input className="input__text" placeholder="Full Name"/>
        <input className="input__text" placeholder="Username"/>
        <input className="input__text" placeholder="Password"/>
        <button className="login__button">Sign Up</button>
    </div>
  )
}

export default SignUp