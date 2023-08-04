import React from 'react'
import '../SignInPage/SignIn.css'

function SignIn() {
  return (
    <div>
        <input className="input__text" placeholder="Phone number, username, or email"/>
        <input className="input__text" placeholder="Password"/>
        <button className="login__button">Log In</button>
    </div>
  )
}

export default SignIn


 