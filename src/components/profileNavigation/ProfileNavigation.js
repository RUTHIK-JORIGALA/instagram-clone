import React from 'react'
import './profileNavigation.css';
import { NavLink } from 'react-router-dom';
import {PiSquaresFourLight} from 'react-icons/pi';
import {BsBookmark} from 'react-icons/bs';
import {LiaUserTagSolid} from 'react-icons/lia'
import ProfilePosts from '../profilePosts/ProfilePosts';
const ProfileNavigation = () => {
  return (
    <section >
      <div className='profileNavigation-container'>
          <NavLink className="profileNavigation navlink" >
              <PiSquaresFourLight className='profileNavigation-icons'/>
              <p className='profileNavigation-title'>POSTS</p>
          </NavLink>
          <NavLink className="profileNavigation navlink ">
              <BsBookmark className='profileNavigation-icons'/>
              <p className='profileNavigation-title'>SAVED</p>
          </NavLink>
          <NavLink className="profileNavigation navlink">
              <LiaUserTagSolid className='profileNavigation-icons'/>
              <p className='profileNavigation-title'>TAGGED</p>
          </NavLink>
        </div>
        <div className="profilePost-container">
          <ProfilePosts/>
         
        </div>
        
    </section>
  )
}

export default ProfileNavigation
