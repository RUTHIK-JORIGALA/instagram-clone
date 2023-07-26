import React from 'react'
import './profileMiddle.css';
import {AiOutlinePlus} from 'react-icons/ai'
const ProfileMiddle = () => {
  return (
    <div className='hilights-container'>
        <figure className="highlights">
            <img src='./Images/profile.jpg' alt='hilighter-cover' className='highlights-cover-image'/>
            <caption>cool</caption>
        </figure>  
        <div className='highlights'>
            <div className="addHighlight">
                <AiOutlinePlus className='addHighlight-icon'/>
            </div>
            <p>New</p>
        </div>
    </div>
  )
}

export default ProfileMiddle
