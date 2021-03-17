import { render } from '@testing-library/react';
import React from 'react';
import './Comment.scss';

const Comment = () =>{
    return (
        <div className="comment">
            <div className="comment__image-container">
                <div className="comment__image comment__comment-profile-pic">
                </div>
            </div>
            <div className="comment__container">
                <div className="comment__name-date-cont">
                    <p className="comment__name">
                    </p>
                    <time className="comment__date">
                    </time>
                </div> 
                <p className="comment__content">
                </p>
                <div className="comment__btn-container">
                    <button type="submit" className="comment__delete-btn" name="">Delete comment
                    </button>
                    <div className='comment__like-btn-cont'>
                        <button type="submit" className="comment__like-btn" name="">♡
                        </button>  likes
                    </div>
                </div>
            </div>
        </div>)}

        export default Comment;