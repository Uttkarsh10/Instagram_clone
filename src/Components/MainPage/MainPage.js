import React from 'react'
import Post from '../Post/Post'
import postImage from '../../Images/post_image.jpeg'
import profilePic from '../../Images/profile_pic.jpeg'
import profilePic2 from '../../Images/pp2.png'
import profilePic3 from '../../Images/pp3.jpeg'
import profilePic4 from '../../Images/pp4.jpeg'
import postImage2 from '../../Images/post.jpg'
import postImage3 from '../../Images/post2.jpg'
import postImage4 from '../../Images/post3.jpg'

function MainPage() {
  const postData = [
    {
      username:"Uttkarsh_10",
      location:"IIT Roorkee",
      post_image : postImage,
      profile_pic : profilePic,
      likes : "1200"
    },

    {
      username : "sarah_9",
      location : "LA",
      post_image : postImage2,
      profile_pic : profilePic2,
      likes : "200"
    },

    {
      username : "taru_10",
      location : "Roorkee",
      post_image : postImage3,
      profile_pic : profilePic3,
      likes : "500"
    },

    {
      username : "kiara_advani",
      location : "Mumbai",
      post_image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlE0qyZVJ2LkP3cJi7Y0n3gVdgBYBVszONhw&usqp=CAU",
      profile_pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgq1H1MTr6v2o6YYW3w4gkmYfc5vEvXjp7aQ&usqp=CAU",
      likes : "1500"
    },

    {
      username : "afcsdc_sas",
      location : "Pune",
      post_image : postImage4,
      profile_pic : profilePic4,
      likes : "20"
    }
  ]

  return (
    <div>
      {/* <Post username="Uttkarsh_10" location="IIT Roorkee" post_image= {postImage} profile_pic = {profilePic} likes="1200"/>
      <Post username="sarah_9" location="LA" post_image={postImage2} profile_pic ={profilePic2} likes="200"/>
      <Post username="taru_10" location="Roorkee" post_image={postImage3} profile_pic ={profilePic3} likes="500"/>
      <Post username="kiara_advani" location="Mumbai" post_image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlE0qyZVJ2LkP3cJi7Y0n3gVdgBYBVszONhw&usqp=CAU" profile_pic ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgq1H1MTr6v2o6YYW3w4gkmYfc5vEvXjp7aQ&usqp=CAU" likes="1500"/>
      <Post username="afcsdc_sas" location="Pune" post_image={postImage4} profile_pic ={profilePic4} likes="20"/> */}

      {postData.map(postItem => (
        <Post username= {postItem.username} location = {postItem.location} post_image = {postItem.post_image} profile_pic = {postItem.profile_pic} likes = {postItem.likes}/>
      ))}
    </div>
  )
}

export default MainPage