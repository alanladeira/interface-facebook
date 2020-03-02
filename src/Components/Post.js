import React from 'react';

import PostComment from './PostComment'

import './Post.css'

function PostHeader({author, date}){
  return (
    <div className="post-header"> 
      <div> <img className="avatar" src={author.avatar} /> </div>           
      <div className="post-info"> 
        <div className="author">{ author.name } </div>
        <div className="date">{ date }</div>
      </div>                       
    </div>
  )
}

function PostContent({ content }){
  return (
    <div className="post-body">
      <div className="post-content">
        { content }
      </div>      
    </div>
  )
}

function Post({ author, date, content, comments }) {
  return (    
    <div className="post">          
      <PostHeader author={author} date={date}/>
      <PostContent content={content} />
      <PostComment comments={comments}/>          
    </div>      
  )
}

export default Post;