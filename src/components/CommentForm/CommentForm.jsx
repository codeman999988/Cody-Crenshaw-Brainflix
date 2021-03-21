import React from 'react'
import './CommentForm.scss'

const CommentForm = () => {
    return (
      <section className="comments">
        <h2 className="comments__invite">
          JOIN THE CONVERSATION
        </h2>
        <form className="comments__form" >
          <div className="comments__form-image-container" >
            <div className="comment__image comments__profile-pic profile-pic" id="profile-pic">
            </div>
          </div>
        <div className="comments__form-container">
          <textarea type="text" className="comments__comment-input"  name="commentField" placeholder="Add a new comment">
          </textarea>
          <button className="comments__button" type="submit">
            COMMENT
          </button>
        </div>
        </form>
      </section>
    )
}

export default CommentForm;
