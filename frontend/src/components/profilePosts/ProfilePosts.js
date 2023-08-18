import React, { useEffect, useState } from 'react'
import './profilePosts.css';
const ProfilePosts = () => {
  const [pic , setPic] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/myposts',{
      headers:{
        "Authorization": "bearer "+localStorage.getItem('jwt')
      }
    })
    .then(res=>res.json())
    .then(result => {
      setPic(result)
    })
    console.log(pic)
  },[])

  return (
    <section className='profile-posts-container'>
    {
      pic.map((post)=>{
        return(
          <div className="profile-post">
            <img src={post.photo} alt='post' className='profilePost-image'/>
          </div>
        )
        
      
      })
    }
    </section>
    
  )
}

export default ProfilePosts
