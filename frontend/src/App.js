import {BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css';
import Header from './pages/header/Header';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Explore from './pages/explore/Explore';
import Reels from './pages/reels/Reels';
import Messages from './pages/messages/Messages';
import Notifications from './pages/notification/Notifications';
import Create from './pages/create/Create';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginContext } from './components/context/LoginContext';
import { useState } from 'react';
function App() {
  const [userLogin , setUserLogin] = useState(false)
  

  return (
    <div className="App">
      <BrowserRouter className="app_main">
        <div className="head-section">
        </div>
        <div className="body-section">
          <loginContext.Provider value={{setUserLogin}}>
          <Header login={userLogin}/>
          <Routes className="center-elements">
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/reels' element={<Reels/>}/>
            <Route path='/messages' element={<Messages/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
          <ToastContainer/>
          </loginContext.Provider>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
