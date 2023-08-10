import React from 'react'
import './Navbar.css'
import Grid from '@mui/material/Grid'
import insta_logo from '../../Images/logoinsta.png'
import home from '../../Images/home.svg'
import message from '../../Images/message.svg'
import find from '../../Images/find.svg'
import react from '../../Images/love.svg'
import Avatar from '@mui/material/Avatar';
import pp from '../../Images/pp1.png'

function Navbar() {
  return (
    <div>
      <div className='navbar_barContent'>
        <Grid container>
          <Grid item xs={2}></Grid>

          <Grid item xs={3}>
            <img src={insta_logo} className="navbar_logo" alt="" width="105px"/>
          </Grid>

          <Grid item xs={3}>
            <input type='text' placeholder='Search' className='navbar_searchBar'/>
            </Grid>

          <Grid item xs={3} style = {{"display" : "flex"}}>
            <img className="navbar_img" src={home} alt="" width="25px"/>
            <img className="navbar_img" src={message} alt="" width="25px"/>
            <img className="navbar_img" src={find} alt="" width="25px"/>
            <img className="navbar_img" src={react} alt="" width="25px"/>
            <Avatar className="navbar_img" src={pp} style={{height:'25px', width:'25px'}}/>
          </Grid>

          <Grid item xs={1}></Grid>

        </Grid>
      </div>
    </div>
  )
}

export default Navbar