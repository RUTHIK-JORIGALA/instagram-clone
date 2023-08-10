import React, { useContext, useEffect } from 'react';

import {BsInstagram ,BsMessenger , BsFillPlusSquareFill } from 'react-icons/bs';
import {BiSearch , BiSolidMoviePlay} from 'react-icons/bi'
import {GoHome , GoHomeFill} from 'react-icons/go';
// import {ImCompass2} from 'react-icons/im';
// import {GrMultimedia} from 'react-icons/gr';
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai';
// import {CgAddR} from 'react-icons/cg';
import {MdExplore} from 'react-icons/md';
import {FaMagnifyingGlass} from 'react-icons/fa6'
import './header.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { loginContext } from '../../components/context/LoginContext';


const Header = ({login}) => {
  const {setUserLogin} = useContext(loginContext);
  
  console.log(login)
  const navigate = useNavigate();

  const fetchingData = async () =>{
    const resData = await fetch("http://localhost:5000/");
    const Data = await resData.json();
    console.log(Data);
  }

  useEffect(()=>{
    fetchingData();

    const  token = localStorage.getItem('jwt');
    if(!token){
      navigate('/login');
      setUserLogin(false);
    }
    else{
      setUserLogin(true)
    }

    
  },[])

  return (
    <div className='header'> 
      <div className="header-inner">
        <div className="main-logo">
          <NavLink className="navlink" to="/"><BsInstagram className='header-nav-icon'/></NavLink>
        </div>
        <div className="navigation-menu">
          <div className="navigation-icon">
            <NavLink className="navlink" to="/"><GoHomeFill className='header-nav-icon'/></NavLink>
            {/* <NavLink className="navlink" to="/"><GoHome className='header-nav-icon'/></NavLink> */}
          </div>
          <div className="navigation-icon">
            <NavLink className="navlink" to="/search"><FaMagnifyingGlass className='header-nav-icon'/></NavLink>
            {/* <NavLink className="navlink" to="/search"><BiSearch className='header-nav-icon'/></NavLink> */}
          </div>
          <div className="navigation-icon">
            <NavLink className="navlink" to="/explore"><MdExplore className='header-nav-icon'/></NavLink>
            {/* <NavLink className="navlink" to="/explore"><ImCompass2 className='header-nav-icon'/></NavLink> */}
          </div>
          <div className="navigation-icon">
           <NavLink className="navlink" to="/reels"><BiSolidMoviePlay className='header-nav-icon'/></NavLink>
          </div>
          <div className="navigation-icon notification-alert">
            <NavLink className="navlink" to="/messages"> <BsMessenger className='header-nav-icon'/></NavLink>
          </div>
          <div className="navigation-icon notification-alert">
            <NavLink className="navlink" to="/notifications"> <AiFillHeart className='header-nav-icon'/></NavLink>
            {/* <NavLink className="navlink" to="/notifications"> <AiOutlineHeart className='header-nav-icon'/></NavLink> */}
          </div>
          <div className="navigation-icon">
            <NavLink className="navlink" to="/create">  <BsFillPlusSquareFill className='header-nav-icon'/></NavLink>
            {/* <NavLink className="navlink" to="/create">  <CgAddR className='header-nav-icon'/></NavLink> */}
          </div>
          <div className="navigation-icon-profile">
            <NavLink className="navlink" to="/profile"><img src='./Images/profile.jpg' className='profile-img' alt='profile'/></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
