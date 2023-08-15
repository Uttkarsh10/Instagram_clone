import React from 'react'
import imagesrc from '../../Images/pp1.png'
import { Avatar } from '@mui/material'
import './Suggestions.css'

function Suggestions() {

    const SuggestionsData = [
        {
          username:"Uttkarsh_10",
          profile_pic : imagesrc
        },
    
        {
          username : "sarah_9",
          profile_pic : imagesrc
        },
    
        {
          username : "taru_10",
          profile_pic : imagesrc
        },
    
        {
          username : "kiara_advani",
          profile_pic : imagesrc
        },
    
        {
          username : "afcsdc_sas",
          profile_pic : imagesrc
        }

      ]


  return (
    <div>
        <div className='suggestions_container'>

            <div className='suggestions_header'>
                Suggestions for you.
            </div>

            <div className='suggestions_body'>
                {SuggestionsData.map(item => (
                    <div className='suggestions_friends'>
                        <Avatar src = {imagesrc} className='suggestions_image'/>
                        <div className='suggestions_username'>Friend 1</div>
                     </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Suggestions