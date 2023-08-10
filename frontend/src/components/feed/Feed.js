import React, { useEffect , useState} from 'react'
import './feed.css';
import Post from '../post/Post';
const Feed = () => {
  const [data , setData] = useState([]);
  // console.log(data)
  useEffect(()=>{
    fetch('http://localhost:5000/allposts',{
      headers:{
        "Authorization" : "bearer "+localStorage.getItem('jwt')
      }
    })
    .then(res =>res.json())
    .then((result)=> setData(result))
    .catch(err => console.log(err))
  },[])

  return (
    <section className='feed'>
      {/* <Post/> */}
      {
      data.map((curpost)=>{
        return <Post posts= {curpost}/>
      })
      }
      
    </section>
  )
}

export default Feed
