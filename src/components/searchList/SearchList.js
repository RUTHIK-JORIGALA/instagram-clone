import React from 'react'
import './searchList.css';
import {GrClose} from 'react-icons/gr';
const SearchList = () => {
  return (
    <div>
      <div className="searchList">
        <div className='searchList-items'>
            <div>
                <img src='./Images/profile.jpg' alt='profile' className='searchList-profile-pic'/>
            </div>
            <div className="searchList-description">
                <h4 className='searchList-profile-name'>ankam_hemanth</h4>
                <div className="sub-description">
                    <p>sub title</p> |
                    <p>Following</p>
                </div>
            </div>
        </div>
        
        <div className="searchList-close">
            <GrClose className='searchList-close-icon'/>
        </div>
      </div>
    </div>
  )
}

export default SearchList
