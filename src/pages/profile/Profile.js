import React from 'react'
import './profile.css'
import ProfileTop from '../../components/profileTop/ProfileTop'
import ProfileMiddle from '../../components/profileMiddle/ProfileMiddle'
import ProfileNavigation from '../../components/profileNavigation/ProfileNavigation'
const Profile = () => {
  return (
    <div className='profile'>
      <ProfileTop/>
      <ProfileMiddle/>
      <hr className='line-break-profile'/>
      <ProfileNavigation/>
    </div>
  )
}

export default Profile
