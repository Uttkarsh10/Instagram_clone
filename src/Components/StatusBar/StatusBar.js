import React from 'react'
import './StatusBar.css'
import { Avatar } from '@mui/material'
import statusImage from '../../Images/pp1.png'

function StatusBar() {
  return (
    <div className='statusbar_container'>
        <div className='status'>
            <Avatar src={statusImage} className='statusbar_status'/>
            <div style={{fontSize : '12px',maxWidth:'70px', overflow:'hidden'}}>uttkarsh_10</div>
        </div>

        <div className='status'>
            <Avatar src={statusImage} className='statusbar_status'/>
            <div style={{fontSize : '12px',maxWidth:'70px', overflow:'hidden'}}>uttkarsh_10</div>
        </div>

        <div className='status'>
            <Avatar src={statusImage} className='statusbar_status'/>
            <div style={{fontSize : '12px',maxWidth:'70px', overflow:'hidden'}}>uttkarsh_10</div>
        </div>

        <div className='status'>
            <Avatar src={statusImage} className='statusbar_status'/>
            <div style={{fontSize : '12px',maxWidth:'70px', overflow:'hidden'}}>uttkarsh_10</div>
        </div>

        <div className='status'>
            <Avatar src={statusImage} className='statusbar_status'/>
            <div style={{fontSize : '12px',maxWidth:'70px', overflow:'hidden'}}>uttkarsh_10</div>
        </div>

        <div className='status'>
            <Avatar src={statusImage} className='statusbar_status'/>
            <div style={{fontSize : '12px',maxWidth:'70px', overflow:'hidden'}}>uttkarsh_10</div>
        </div>

        <div className='status'>
            <Avatar src={statusImage} className='statusbar_status'/>
            <div style={{fontSize : '12px',maxWidth:'70px', overflow:'hidden'}}>uttkarsh_10</div>
        </div>

        <div className='status'>
            <Avatar src={statusImage} className='statusbar_status'/>
            <div style={{fontSize : '12px',maxWidth:'70px', overflow:'hidden'}}>uttkarsh_10</div>
        </div>
        
    </div>
  )
}

export default StatusBar