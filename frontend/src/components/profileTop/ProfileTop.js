import React from 'react'
import './profileTop.css';
import {FiSettings} from 'react-icons/fi'
const ProfileTop = () => {
  return (
    <section>
      <div className="profileTop-container">
        <div className="profile-display-container">
            <img src='./Images/profile.jpg' alt='profile' className='profile-dispaly-picture'/>
        </div>
        <div className="person-activity-container">
            <div className='person-activity-top'>
                <div className="userId-container">
                    <p>ankam_hemanth</p>
                </div>
                <div className="editProfile-container">
                    <p>Edit profile</p>
                </div>
                <div className="viewArchieve-container">
                    view Archive
                </div>
                <div className="settings-container">
                    <FiSettings/>
                </div>
            </div>
            <div className='person-activity-middle'>
                <div className="totalPosts-container">
                    <p><span><b>22</b></span> posts</p>
                </div>
                <div className="totalFollowers-container">
                    <p><span><b>25</b></span> Followers</p>
                </div>
                <div className="totalFollowing-container">
                    <p><span><b>22</b></span> Following</p>
                </div>
            </div>
            <div className='userName-container'>
                <h6>Ankam Hemanth</h6>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileTop
