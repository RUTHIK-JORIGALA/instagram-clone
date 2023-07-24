import React from 'react'
import './recentChat.css';
const RecentChat = () => {
  return (
    <secton className='recent-chat'>
      <div className="recentChat-profile-picture">
        <img src='./Images/profile.jpg' alt='profile' className='recentChat-profile-pic'/>
      </div>
        <div className="recentChat-profile-details">
            <h3>ankam_hemanth</h3>
            <p>Active <span>22</span>m ago</p>
        </div>
    </secton>
  )
}

export default RecentChat
