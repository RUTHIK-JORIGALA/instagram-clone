import React, { useEffect, useState } from 'react'
// import {BiImages} from 'react-icons/bi';
import './create.css';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Create = () => {
  const[body, setBody] = useState('');
  const[image, setImage] = useState('');
  const [url,setUrl] = useState('');

  const navigate = useNavigate();
  const notifyA = (msg) => toast.error(msg,{theme: "dark"})
  const notifyB = (msg) => toast.success(msg);

  useEffect(()=>{
     // saving post to mongoDB
     if(url){
      fetch("http://localhost:5000/createPost",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"bearer "+ localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        body,
        pic:url
      })
      }).then((res)=>res.json())
      .then(data=>{
        // console.log(data);
        if(data){
          notifyB("uploaded successfully")
          navigate('/') 
        }
      })
      .catch(err => console.log(err))
     }
     
  },[url])

  const postDetails = () =>{
    console.log(body, image);
    const data = new FormData();
    data.append("file",image)
    data.append("upload_preset","insta-clone")
    data.append("cloud_name","ruthik")
    fetch("https://api.cloudinary.com/v1_1/ruthik/image/upload",{
      method:"post",
      body:data
    }).then(res=>res.json())
    .then(data=>{
      setUrl(data.url)
      // console.log(data)
      if(data.error){
        notifyA("upload image and caption");
      }
    })
    .catch(err=>{ 
      console.log(err)
    })

    
  }

  const loadFile = (event) =>{
    let output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) 
    }
  }

  return (
    <div className='create-container'>
      <div className="create">

        <h3>Create new post</h3>
        <hr/>
        {/* <BiImages/> */}
        <img id='output' src='https://tse1.mm.bing.net/th?id=OIP.2ysWaZVQWKbuTngNt9YKoAHaGV&pid=Api&P=0&h=180' height="100px"alt='post'/>
        <input  type='file' 
        onChange={(event)=>{
                        loadFile(event);
                        setImage(event.target.files[0])}}/>
        <textarea className='create-post-caption' placeholder='Enter the caption' 
            value={body} onChange={(e)=>setBody(e.target.value)}/>
        <button className='create-post-btn' onClick={()=>postDetails()}>Post</button>
      </div>
    </div>
  )
}

export default Create
