import React from 'react'
import './chatList.css';
import {AiOutlineDown} from 'react-icons/ai';
import {IoCreateOutline} from 'react-icons/io5'
import RecentChat from '../recentChat/RecentChat';
const ChatList = () => {
  return (
    <section className='chatList-container'>
        <div className="chatList">
            <div className="chatList-profile-container">
                <div className="chatList-profile-name">
                    <h1>ankam_hemanth</h1>
                    <AiOutlineDown/>
                </div>
                <div className="chatList-newMessage">
                    <IoCreateOutline className='chatList-newMessage-icon'/>
                </div>
            </div>

            <div className="chatList-category">
                <h3>Messages</h3>
                <h3 className='hilight-color'><span>1</span> Requests</h3>
            </div>
            <div className="recent-chatList">
                <RecentChat/>
                <RecentChat/>
                <RecentChat/>
                <RecentChat/>
                <RecentChat/>
                <RecentChat/>
            </div>
        </div>
    </section>
  )
}

export default ChatList
