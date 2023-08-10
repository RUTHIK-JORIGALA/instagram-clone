
import './post.css';
import {BsThreeDots} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import {ImCompass} from 'react-icons/im';
import {BiBookmark} from 'react-icons/bi';
const Post = ({posts}) => {
// console.log(posts.photo)
const {photo} = posts
console.log(photo)
  return (
    <section className='post-container' >
      <div className="post">
        <div className="post-header">
            <div className="post-profile">
                <img src={photo} alt='profile' className='post-profile-image'/>
                <h3 className='post-profile-title'>ankam_hemanth</h3>
                <div className='dot' ></div>
                <p className='person-active-time'>13 m</p>
            </div>
            <BsThreeDots className='post-option-icon'/>
        </div>
        <img src={photo} className='post-image' alt='profile'/>
        <div className="post-reactions">
            <div className='post-reactions-icons'>
                <AiOutlineHeart  className='post-reaction-icon'/>
                <FaRegComment className='post-reaction-icon'/>
                <ImCompass className='post-reaction-icon'/>
            </div>
            <div>
                <BiBookmark className='post-reaction-icon'/>
            </div>
        </div>
        <h3><span>222</span> likes</h3>
        <div className="post-description">
            <h3>ankam_hemanth</h3>
            <p>this is the description</p>
        </div>
        <p className='more'>more</p>
        <p className='show-comments'>View all 3 comments</p>
        <input className='input-comment' placeholder='Add a comment...' />
      </div>
      <br/>
      <hr/>
    </section>
  )
}

export default Post
