import React from 'react'
import './login.css';
import {AiFillFacebook} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <section className='login-container'>
      <div className="login-top">
        <img src='./Images/logoinsta.png' alt='logoinsta' width="150px" />
        <div className='signup-input-container'>
            <input type='text' placeholder='Mobile number,username or email address'/>
        </div>
        <div className='signup-input-container'> 
            <input type='password' placeholder='password'/>
        </div>
        <input type='submit' value="Log in" id='submit-btn' style={{fontWeight:"600"}}/>
        <h6>OR</h6>
        <div className="facebook-login-loginPage">
            <AiFillFacebook/>
            <p>Log in with Facebook</p>
        </div>
        <p>Forgotten your password?</p>
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

export default Login
