import React from 'react';
import './Comment.scss';

function Comment() {
    return (
        <div class="comment">
            <div class="comment__image-container">
                <div class="comment__image comment__comment-profile-pic">
                </div>
            </div>
            <div class="comment__container">
                <div class="comment__name-date-cont">
                    <p class="comment__name">
                    </p>
                    <time class="comment__date" datetime="">
                    </time>
                </div> 
                <p class="comment__content">
                </p>
                <div class="comment__btn-container">
                    <button type="submit" class="comment__delete-btn" name="">Delete comment
                    </button>
                    <div class='comment__like-btn-cont'>
                        <button type="submit" class="comment__like-btn" name="">♡
                        </button>  likes
                    </div>
                </div>
            </div>
        </div>
    )
    ;}
        export default Comment;