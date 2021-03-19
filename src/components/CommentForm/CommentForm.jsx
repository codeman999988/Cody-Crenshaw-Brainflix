import React from 'react'
import './CommentForm.scss'

const CommentForm = () => {
    return (
<section className="comments">
          <h2 className="comments__title">Join the Conversation</h2>
          <form className="comments__form" >
            <div className="comments__image-container" >
              <div className="comment__image comment__profile-pic profile-pic" id="profile-pic">
              </div>
            </div>
          <div className="comments__form-container">
            <label className="comments__form-label" htmlFor="formName">NAME
            </label>
            <input className="comments__name-input" type="text" placeholder="Name" name="name" /> 
            <label className="comments__form-label" htmlFor="formComment">COMMENT
            </label>
            <textarea className="comments__comment-input" type="text" name="commentField" placeholder="Add a new comment">
            </textarea>
            <button className="comments__button" type="submit">COMMENT</button>
          </div>
        </form>
      </section>
    )
}

export default CommentForm;
