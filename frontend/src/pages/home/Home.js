import React, { useEffect , useState} from 'react'
import './home.css';

import Stories from '../../components/stories/Stories';
import Feed from '../../components/feed/Feed';
const Home = () => {

  return (
    <div className='home'>
      <Stories/>
      <Feed />
    </div>
  )
}

export default Home
