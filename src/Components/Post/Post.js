import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import postImage from '../../Images/post.jpg'

function Post() {
  return (
    <div className='post__container'>

        <div className='post__header'>
            <Avatar className='username__image' src=""/>
            <div className='post__username'>
                <div style={{textAlign:'center', fontWeight:'bold'}}>Username</div>
                <div>Location</div>
            </div>

        </div>

        <div className='post__image'>
            <img src={postImage} alt="" width="615px"/>
        </div>

        <div></div>

        <div></div>

    </div>
  )
}

export default Post