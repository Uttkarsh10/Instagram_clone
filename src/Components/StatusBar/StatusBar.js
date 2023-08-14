import React from 'react'
import './StatusBar.css'
import { Avatar } from '@mui/material'
import statusImage from '../../Images/pp1.png'

function StatusBar() {

    const statusList = [
        {username : 'uttkarsh_10', image : statusImage},
        {username : 'anu_29', image : statusImage},
        {username : 'neeraj_15', image : statusImage},
    ]

  return (
    <div className='statusbar_container'>

            {statusList.map((item) => (
                <div className='status'>
                    <Avatar src={item.image} className='statusbar_status'/>
                    <div style={{fontSize : '12px',maxWidth:'70px', overflow:'hidden'}}>{item.username}</div>
                </div>
            ))}

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