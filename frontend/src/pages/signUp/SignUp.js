import React, { useState } from 'react'
import './signUp.css';
import {AiFillFacebook} from 'react-icons/ai';
import {Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';



const SignUp = () => {
  const navigate = useNavigate();

  // toast functions

  const notifyA = (msg) =>toast.error(msg,{theme:"dark"});
  const notifyB = (msg) => toast.success(msg,{theme: "colored"});
   
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  const [name,setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log(name, userName , email , password);

  const postData = () =>{
    if(!emailRegex.test(email)){
      notifyA("Invalid email");
      return;
    }
    if(!passwordRegex.test(password)){
      return notifyA("Invalid Password");
      
    }

    fetch("http://localhost:5000/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:name,
        userName:userName,
        email : email,
        password: password
      })
    }).then((res)=>res.json())
    .then((data)=>{
      if(data.error){
        notifyA(data.error);
      }else{
        notifyB(data.message);
        navigate("/login")
      }
    })
  }
  

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
            <input type='text' placeholder='Mobile number or email address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='signup-input-container'> 
            <input type='text' placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='signup-input-container'>
            <input type='text' placeholder='Username' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        <div className='signup-input-container'>
            <input type='password'  placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>       
        <p className='text-btm'>People who use our service may have uploaded your contact information to Instagram.<span style={{color:"blue"}}> Learn more</span></p>

        <p className='text-btm'>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
        
        <input type='submit' value="Sign Up" id='submit-btn' style={{fontWeight:"600"}}
                            onClick={()=>postData()}/>
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
