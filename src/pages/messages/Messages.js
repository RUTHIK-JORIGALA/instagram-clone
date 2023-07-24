import React from 'react'
import './messages.css'
import ChatList from '../../components/chatList/ChatList'
import SingleChat from '../../components/singlechat/SingleChat'
// import NoMessages from '../../components/noMessages/NoMessages'
const Messages = () => {
  return (
    <div className='messages'>
      <ChatList/>
      {/* <NoMessages/> */}
      <SingleChat/>
    </div>
  )
}

export default Messages
