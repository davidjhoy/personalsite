import React, {useEffect} from 'react'

const Blog = () => {

  useEffect(()=>{
    fetch("https://api.medium.com/v1/users/{{@davidjhoyjr}}/publications")
    .then((response)=> response.json())
    .then((data)=>{console.log(data)})
  },[])
  return (
    <div>Blog</div>
  )
}

export default Blog