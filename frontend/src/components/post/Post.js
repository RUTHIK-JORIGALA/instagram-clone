
import './post.css';
import {BsThreeDots} from 'react-icons/bs';
import {AiOutlineHeart ,AiFillHeart} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import {ImCompass} from 'react-icons/im';
import {BiBookmark} from 'react-icons/bi';
import { json } from 'react-router';
const Post = ({posts,data , setData}) => {
// console.log(posts.photo)
const {photo , _id} = posts
// console.log(posts)

const likePost = (id) =>{
  fetch("http://localhost:5000/like",{
    method:"put",
    headers:{
      "Authorization" : "bearer "+localStorage.getItem('jwt'),
      "Content-Type":"application/json"
    },
    body:JSON.stringify( {
      postId:id
    })
  }).then(res => res.json())
    .then((result)=>{
      const newData = data.map((posts)=>{
        if(posts._id == result._id){
          return result;
        }
        else{
          return posts
        }
      })
      setData(newData)
      console.log(result)
    })
}


const unlikePost = (id) =>{
  fetch("http://localhost:5000/unlike",{
    method:"put",
    headers:{
      "Authorization" : "bearer "+localStorage.getItem('jwt'),
      "Content-Type":"application/json"
    },
    body:JSON.stringify( {
      postId:id
    })
  }).then(res => res.json())
    .then((result)=>{
      const newData = data.map((posts)=>{
        if(posts._id == result._id){
          return result;
        }
        else{
          return posts
        }
      })
      setData(newData)
      console.log(result)
    })
}

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
              {
                posts.likes.includes(JSON.parse(localStorage.getItem('user'))._id) ? <AiFillHeart className='post-reaction-icon' onClick={()=>unlikePost(_id)}/> :
                        <AiOutlineHeart  className='post-reaction-icon' onClick={()=>likePost(_id)}/>
              }
                
                <FaRegComment className='post-reaction-icon'/>
                <ImCompass className='post-reaction-icon'/>
            </div>
            <div>
                <BiBookmark className='post-reaction-icon'/>
            </div>
        </div>
        <h3><span>{posts.likes.length}</span> likes</h3>
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
