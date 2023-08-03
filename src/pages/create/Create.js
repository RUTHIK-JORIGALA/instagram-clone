import React from 'react'
// import {BiImages} from 'react-icons/bi';
import './create.css';

const Create = () => {
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
        <input  type='file' onClick={(event)=>loadFile(event)}/>
     
      </div>
    </div>
  )
}

export default Create
