import React, {useEffect} from 'react'
import './blog.css'

const Blog = () => {
  const openArticle = (article) =>{
    window.open(article,'_blank')
  }
  
  return (
    <div className='blogwrapper'>
      <div className='blogBlock' onClick={()=>{openArticle('https://medium.com/@davidjhoyjr/storing-auth0-user-info-in-your-react-rails-app-5d080a1ee125')}}>
      <h2 className='blogHeader'>
      Storing Auth0 User Info in Your React/Rails App
      <p className = "blogDate">August 26, 2022</p>
      </h2>
     
     </div> 
      
     <div className='blogBlock' onClick={()=>{openArticle('https://medium.com/p/c91a4288c6c2')}}>
      <h2 className='blogHeader'>Active Model Serializer | Ruby on Rails
      <p className = "blogDate">July 20, 2022</p>
      </h2>
     </div> 

     <div className='blogBlock' onClick={()=>{openArticle('https://medium.com/@davidjhoyjr/activerecord-cheat-sheet-ruby-on-rails-6ac39639e7d6')}}>
      <h2 className='blogHeader'>ActiveRecord Cheat Sheet | Ruby on Rails
      <p className = "blogDate">July 12, 2022</p>
      </h2>
     </div> 

     <div className='blogBlock' onClick={()=>{openArticle('https://medium.com/@davidjhoyjr/event-stoppropagation-in-action-4605ed1bc5c4')}}>
      <h2 className='blogHeader'>Event.stopPropagation() in action
      <p className = "blogDate">June 22, 2022</p>
      </h2>
     </div> 

     <div className='blogBlock' onClick={()=>{openArticle('https://medium.com/@davidjhoyjr/javascript-should-you-use-textcontent-or-innertext-b0343859e587')}}>
      <h2 className='blogHeader'>Javascript: Should you use textContent or innerText?
      <p className = "blogDate">June 1, 2022</p>
      </h2>
     </div>      
      
    </div>
  )
}

export default Blog