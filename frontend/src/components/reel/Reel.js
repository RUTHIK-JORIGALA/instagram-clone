import React,{useState , useRef} from 'react'
import './reel.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {FaRegComment , FaMusic} from 'react-icons/fa';
import {ImCompass} from 'react-icons/im';
import {BiBookmark} from 'react-icons/bi';
import {BsThreeDots, BsFillPlayFill, BsPauseFill} from 'react-icons/bs'

const Reel = () => {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className='reel'>
      <div className="reels-video">
        <video src="./video/video01.mp4"  controls> </video>
        {/* <button
          className={`play-pause-btn ${isPlaying ? "pause" : "play"}`}
          onClick={handlePlayPause}
        >
          {isPlaying ? <BsFillPlayFill/> : <BsPauseFill/>}
        </button> */}
        <div className="reel-details">
          <div className="reel-profile">
            <div className="onreel-prifile-pic">
              <img src='./Images/profile.jpg' alt='reels-profile' className='reelon-profile-pic'/>
            </div>
            <div className="reel-profile-name">
              <p>ankam_hemanth</p>
            </div>
            <div className="reel-space">

            </div>
            <div className="reel-follow">
              <p>Follow</p>
            </div>
          </div>
          <div className="reel-description">
            <p>description <span>more...</span></p>
          </div>
          <div className="reel-audio">
            <FaMusic/>
            <p>audio display</p>
          </div>
        </div>
      </div>
      <div className="reels-reactions">

        <div className="reels-controls">
          <div className="reels-like">
              <AiOutlineHeart  className='reel-reaction-icon'/>
              <p>2511</p>
          </div>
          <div className="reels-comment">
              <FaRegComment className='reel-reaction-icon'/>
              <p>256</p>
          </div>
          <div className="reels-share">
              <ImCompass className='reel-reaction-icon'/>
          </div>
          <div className="reels-save">
              <BiBookmark className='reel-reaction-icon'/>
          </div>
          <div className="reels-more-options">
              <BsThreeDots className='reel-reaction-icon'/>
          </div>
          <div className="reels-profile-pic">
              <img src='./Images/profile.jpg' alt='reels-profile' className='reel-profile-pic'/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Reel
