import React from 'react'
import './CommentForm.scss'

const CommentForm = () => {
    return (
<section className="comments">
          <div></div>
          <h2 className="comments__invite">JOIN THE CONVERSATION</h2>

          <form className="comments__form" >
            <div className="comment__form-image-container" >
              <div className="comment__image comment__profile-pic profile-pic" id="profile-pic">
              </div>
            </div>
          <div className="comments__form-container">
            <textarea className="comments__comment-input" type="text" name="commentField" placeholder="Add a new comment">
            </textarea>
            <button className="comments__button" type="submit">COMMENT</button>
          </div>
        </form>
      </section>
    )
}

export default CommentForm;
