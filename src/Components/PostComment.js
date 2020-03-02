import React from 'react';

function PostComment({ comments }){
  return (
    <>
    {comments.map(comment => ( 
      <div key={comment.id} className="post-comments">
       <div><img className="avatar" src={comment.author.avatar} /></div>
        <div className="comments">
          <p>
            <span className="comment-author">{comment.author.name}</span>
            <span className="comment-content">{comment.content}</span>
          </p>
        </div>            
      </div>)
      )}
     </> 
  )    
}

export default PostComment;