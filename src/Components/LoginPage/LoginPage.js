import React from "react";
import Grid from '@mui/material/Grid';
import inst_image from '../../Images/9364675fb26a.svg'


const LoginPage = () => {
    return ( 
        <Grid container>
            <Grid item xs={3}>Hey</Grid>
            <Grid item xs={6}>
                <div>
                    <div>
                        <img src={inst_image} alt="" width="450px"/>
                    </div>
                    <div></div>
                </div>
            </Grid>
            <Grid item xs={3}>slgmslmg</Grid>
        </Grid>
    );
}

export default LoginPage;