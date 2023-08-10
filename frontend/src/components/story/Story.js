import React from 'react'
import './story.css';
const Story = () => {
  return (
    <div className='story'>
        <figure className='story-figure'>
            <div className="story-image-container">
                <img src='./Images/profile.jpg' className='story-image' alt='story-profile'/>
            </div>
            <figcaption className='figcaption'>ankam_hem</figcaption>
        </figure>
    </div>
  )
}

export default Story
