import React from 'react';
import './CommentForm.scss';

const CommentForm = (props) => {

return (
  <section className="comments">
    <h2 className="comments__invite">
      JOIN THE CONVERSATION
    </h2>
    <form 
    onSubmit={(e) => props.postComment(e)} 
    className="comments__form" >
      <div className="comments__form-image-container" >
        <div className="comment__image comments__profile-pic profile-pic" id="profile-pic">
        </div>
      </div>
      <div className="comments__form-container">
        <div className="comments__input-container">
          <input 
            type="text" 
            name="name" 
            className="comments__name-input" 
            placeholder="Name" />
          <input type="text" 
            className="comments__comment-input"  
            name="commentField" 
            placeholder="Add a new comment" />
        </div>

        <button className="comments__button" type="submit">COMMENT
        </button>
      </div>
    </form>
  </section>
)}

export default CommentForm;
