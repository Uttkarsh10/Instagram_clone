import React from "react";
import Grid from '@mui/material/Grid';
import inst_image from '../../Images/9364675fb26a.svg'
import insta_logo from '../../Images/logoinsta.png'
import app_logo from '../../Images/app.png'
import play_logo from '../../Images/play.png'
import fb_logo from '../../Images/fb.png'
import './LoginPage.css'


const LoginPage = () => {
    return ( 
        <Grid container>
            <Grid item xs={3}>Hey</Grid>
            <Grid item xs={6}>
                <div className="loginpage__main">
                    <div>
                        <img src={inst_image} alt="" width="450px"/>
                    </div>
                    
                    <div className="loginpage__right">
                        <div className="loginpage__rightcomponent">
                            <div>
                                <img className="loginpage__logo" src={insta_logo} alt=""/>
                            </div>
                            <div>
                                <input className="input__text" placeholder="Phone number, username, or email"/>
                                <input className="input__text" placeholder="Password"/>
                                <button className="login__button">Log In</button>

                                <div className="or__div">
                                    <div className="or__line"></div>
                                    <div className="login__or">OR</div> 
                                    <div className="or__line"></div>
                                </div>

                                <div>
                                    <div className="links">
                                        <img src={fb_logo} alt="" width="15px"/>
                                        <a href="javascript.void(0)" style={{ textDecoration: 'none', fontWeight:'bold' }}> Log in with Facebook</a>
                                    </div>
                                    <div className="links">
                                        <a href="javascript.void(0)" style={{ textDecoration: 'none' }}>Forgot password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="loginpage__rightcomponent2">
                                <div className="signup__div">
                                    Don't have an account? <a  href="javascript.void(0)" style={{ textDecoration: 'none', fontWeight:'bold', color:'0395F6', marginLeft:'5px' }}>Sign Up</a>
                                </div>
                        </div>


                        <div className="loginpage__rightcomponent3">
                            <div>Get the App</div>
                            <div className="rightcomponent3__logo">
                                <img src={app_logo} alt="" width="150px" style={{margin:'5px'}}/>
                                <img src={play_logo} alt="" width="150px" style={{margin:'5px'}}/>
                            </div>
                        </div>

                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>slgmslmg</Grid>
        </Grid>
    );
}

export default LoginPage;