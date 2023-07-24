import React from 'react'
import './feed.css';
import Post from '../post/Post';
const Feed = () => {
  return (
    <section className='feed'>
      <Post/>
      <Post/>
    </section>
  )
}

export default Feed
