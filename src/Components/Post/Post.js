import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import love from '../../Images/love.svg'
import comment from '../../Images/comment.svg'
import share from '../../Images/share.svg'

function Post(props) {
  return (
    <div className='post__container'>

        <div className='post__header'>
            <Avatar className='username__image' src={props.profile_pic}/>
            <div className='post__username'>
                <div style={{textAlign:'center', fontWeight:'bold'}}>{props.username}</div>
                <div>{props.location}</div>
            </div>

        </div>

        <div className='post__image'>
            <img src={props.post_image} alt="" width="615px"/>
        </div>

        <div>
            <div style={{marginLeft:'10px'}}>
                <img src={love} alt="" className='post__reactImage'/>
                <img src={comment} alt="" className='post__reactImage'/>
                <img src={share} alt="" className='post__reactImage'/>
            </div>
            <div style={{fontWeight:'bold', marginLeft:'20px'}}>
                1500 likes
            </div>
        </div>

        <div>
            <div className='post__comment'>Hello Comment</div>
            <div className='post__comment'>Hello Comment</div>
            <div className='post__comment'>Hello Comment</div>
            <div className='post__comment'>Hello Comment</div>
            <input type="text" className='comment_box' placeholder='Add a comment...'/>
        </div>

    </div>
  )
}

export default Post