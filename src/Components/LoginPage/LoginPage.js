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
                                    <img src={fb_logo} alt="" width="15px"/>
                                    <a href="javascript.void(0)" style={{ textDecoration: 'none' }} > Log in with Facebook</a>
                                </div>
                                <div>
                                    <a href="javascript.void(0)" style={{ textDecoration: 'none' }}>Forgot password?</a>
                                </div>
                            </div>
                        </div>

                        <div className="loginpage__rightcomponent2" style={{textAlign:"center"}}>
                                <h3>Don't have an account?</h3>
                                <a  href="javascript.void(0)" style={{ textDecoration: 'none' }}>Sign Up</a>
                        </div>
                        <h3 style={{textAlign:"center"}}>Get the App</h3>

                        <div className="loginpage__rightcomponent3">
                            <div><img src={app_logo} alt="" width="150px"/></div>
                            <div><img src={play_logo} alt="" width="150px"/></div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>slgmslmg</Grid>
        </Grid>
    );
}

export default LoginPage;