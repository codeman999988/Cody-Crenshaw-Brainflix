import React from 'react';
import './Comment.scss';


    const Comment = (props) => {




            return (
                <div className="comment">
                    <div className="comment__image-container">
                        <div className="comment__image comment__comment-profile-pic">
                        </div>
                    </div>
                <div className="comment__container">
                    <div className="comment__name-date-cont">
                        <p className="comment__name">
                            {props.name}
                        </p>
                        <p className="comment__date">
                            {props.date}
                        </p>
                    </div> 
                    <p className="comment__content">
                        {props.comment}
                    </p>
                </div>
            </div>)};
 
    export default Comment;