import React, { useContext } from 'react'
import './profileTop.css';
import {FiSettings} from 'react-icons/fi';
import { loginContext } from '../context/LoginContext';
const ProfileTop = () => {
    const {setLogoutModalOpen} = useContext(loginContext)
  return (
    <section>
      <div className="profileTop-container">
        <div className="profile-display-container">
            <img src='./Images/profile.jpg' alt='profile' className='profile-dispaly-picture'/>
        </div>
        <div className="person-activity-container">
            {/* <h1>{JSON.parse(localStorage.getItem("user")).name}</h1> */}
            <div className='person-activity-top'>
                <div className="userId-container">
                    <p>{JSON.parse(localStorage.getItem("user")).name}</p>
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
                <h6>{JSON.parse(localStorage.getItem("user")).userName}</h6>
                <button className='logout-btn' onClick={()=>setLogoutModalOpen(true)}>Logout</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileTop
