import React,{useContext, useState} from 'react'
import './login.css';
import {AiFillFacebook} from 'react-icons/ai';
import {Link , useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginContext } from '../../components/context/LoginContext';



const Login = () => {
  const {setUserLogin} = useContext(loginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const notifyA = (msg) => toast.error(msg,{theme: "dark"})
  const notifyB = (msg) => toast.success(msg);
  const loginData = () =>{
    fetch("http://localhost:5000/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email : email,
        password: password
      })
    }).then((res)=>res.json())
      .then((data)=>{
        if(data.error){
         return notifyA(data.error)
        }else{
          notifyB(data.message);
          setUserLogin(true);
          console.log(data)
          localStorage.setItem("jwt",data)
          return navigate('/')
        }
      })
  }

  return (
    <section className='login-container'>
      <div className="login-top">
        <img src='./Images/logoinsta.png' alt='logoinsta' width="150px" />
        <div className='signup-input-container'>
            <input type='text' placeholder='Mobile number,username or email address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='signup-input-container'> 
            <input type='password' placeholder='password '  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <input type='submit' value="Log in" id='submit-btn' style={{fontWeight:"600"}} onClick={()=>loginData()}/>
        <h6>OR</h6>
        <div className="facebook-login-loginPage">
            <AiFillFacebook/>
            <p>Log in with Facebook</p>
        </div>
        <p>Forgotten your password?</p>
      </div>
      <div className='form2'>
        <p>Have an accout? <Link to="/signup" className='link'>SignUp</Link></p>
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
