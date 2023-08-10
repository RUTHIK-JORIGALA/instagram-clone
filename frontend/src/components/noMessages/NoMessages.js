import React from 'react'
import './noMessages.css';
import {LiaFacebookMessenger} from 'react-icons/lia'
const NoMessages = () => {
  return (
    <section className='noMessages'>
      <div className="messenger-icon-container">
        <LiaFacebookMessenger className='messenger-icon-noMsg'/>
      </div>
      <h3 >Your messages</h3>
      <p>Send private photos and messages to a friend or group</p>
      <button className='noMessage-send-btn' >Send message</button>
    </section>
  )
}

export default NoMessages
