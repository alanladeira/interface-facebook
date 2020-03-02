import React from 'react'

const Comment = ({ data }) => {
  return (
    <>
      <div className="comment"> 
        <div className="comment-avatar"></div>
        <div className="comment-body">
          <div className="comment-author"></div>
          <div className="comment-content">
            { data }
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment;