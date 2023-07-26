import React from 'react'
import './signUp.css';
import {AiFillFacebook} from 'react-icons/ai';
import {Link} from 'react-router-dom';
const SignUp = () => {
  return (
    <section className='signUp-container'>
      <div className="signUp">
        <img src='./Images/logoinsta.png' alt='logoinsta' width="150px" />
        <p className='top-text'>Sign up to see photos and videos from your friends.</p>
        <div className="facebook-login">
            <AiFillFacebook/>
            <p>Log in with Facebook</p>
        </div>
        <h6>OR</h6>
        <div className='signup-input-container'>
            <input type='text' placeholder='Mobile number or email address'/>
        </div>
        <div className='signup-input-container'> 
            <input type='text' placeholder='Full Name'/>
        </div>
        <div className='signup-input-container'>
            <input type='text' placeholder='Username'/>
        </div>
        <div className='signup-input-container'>
            <input type='password' placeholder='Password'/>
        </div>       
        <p className='text-btm'>People who use our service may have uploaded your contact information to Instagram.<span style={{color:"blue"}}> Learn more</span></p>

        <p className='text-btm'>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
        
        <input type='submit' value="Sign Up" id='submit-btn' style={{fontWeight:"600"}}/>
      </div>
      <div className='form2'>
        <p>Have an accout? <Link to="/login" className='link'>Log in</Link></p>
      </div>
      <div className="signUp-bottom">
        <p>Get the app</p>
        <div className="app-images">
          <img src='./Images/play.png' alt='app' width="150px"/>
          <img src='./Images/app.png' alt='app' width="150px"/>
        </div>
      </div>
    </section>
  )
}

export default SignUp
