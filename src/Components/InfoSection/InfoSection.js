import { Avatar } from '@mui/material'
import React from 'react'
import imagesrc from '../../Images/pp1.png'
import './InfoSection.css'

function InfoSection() {
  return (
    <div>
        <div className='info_container'>
            <Avatar src = {imagesrc} className='info_image'/>
            <div className='info_content'>
                <div className='info_username'>Uttkarsh_10</div>
                <div className='info_description'>Description</div>
            </div>
        </div>
    </div>
  )
}

export default InfoSection