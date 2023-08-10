import React from 'react';
import './singleChat.css';
import {IoCallOutline} from 'react-icons/io5';
import {FiVideo , FiMic} from 'react-icons/fi';
import {AiOutlineInfoCircle , AiOutlinePicture , AiOutlineHeart} from 'react-icons/ai';
import {BsEmojiSmile} from 'react-icons/bs'
const SingleChat = () => {
  return (
    <section className='singleChat-container'>
      <div className="singleChat">
        <div className="singleChat-top">
          <div className="singleChat-top-profile">
            <img src='./Images/profile.jpg' alt='profile' className='singleChat-profile-pic'/>
            <h3>ankam_hemanth</h3>
          </div>
          
          <div className="singleChat-connection-icons">
            <IoCallOutline className='singleChat-icons'/>
            <FiVideo className='singleChat-icons'/>
            <AiOutlineInfoCircle className='singleChat-icons'/>
          </div>
        </div>
        <div className="singleChat-conversation">
            
        </div>
        <div className="singleChat-bottom" >
          <BsEmojiSmile className='singleChat-icons singleChat-inputIcons-emoji'/>
          <input placeholder='Message...' className='singleChat-input'/>
          <div className="singleChat-inputIcons">
            <FiMic className='singleChat-icons'/>
            <AiOutlinePicture className='singleChat-icons'/>
            <AiOutlineHeart className='singleChat-icons'/>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default SingleChat
