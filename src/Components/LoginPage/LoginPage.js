import React from "react";
import Grid from '@mui/material/Grid';
import inst_image from '../../Images/9364675fb26a.svg'
import insta_logo from '../../Images/logoinsta.png'
import app_logo from '../../Images/app.png'
import play_logo from '../../Images/play.png'
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
                                Login Form
                            </div>
                        </div>

                        <div className="loginpage__rightcomponent2" style={{textAlign:"center"}}>
                                <h3>Don't have an account?</h3>
                                <h3 className="signup__link"> Sign Up</h3>
                                {/* <button className="signup__link">Sign up</button> */}
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