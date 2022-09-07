import React, {useEffect} from 'react'
import './blog.css'

const Blog = () => {

  useEffect(()=>{
    fetch("https://api.medium.com/v1/users/{{davidjhoyjr}}/publications")
    .then((response)=> response.json())
    .then((data)=>{console.log(data)})
  },[])
  return (
    <div className='blogwrapper'>
      
     <div className='blogBlock'>
      <h2 className='blogHeader'>Active Model Serializer | Ruby on Rails</h2>
     </div> 

     <div className='blogBlock'>
      <h2 className='blogHeader'>ActiveRecord Cheat Sheet | Ruby on Rails</h2>
     </div> 

     <div className='blogBlock'>
      <h2 className='blogHeader'>Event.stopPropagation() in action</h2>
     </div> 

     <div className='blogBlock'>
      <h2 className='blogHeader'>Javascript: Should you use textContent or innerText?</h2>
     </div>      
      
    </div>
  )
}

export default Blog