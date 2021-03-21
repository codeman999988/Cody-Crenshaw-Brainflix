import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './Comment.scss';


    class Comment extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div className="comment">
                    <div className="comment__image-container">
                        <div className="comment__image comment__comment-profile-pic">
                        </div>
                    </div>
                <div className="comment__container">
                    <div className="comment__name-date-cont">
                        <p className="comment__name">
                            {this.props.name}
                        </p>
                        <p className="comment__date">
                            {this.props.date}
                        </p>
                    </div> 
                    <p className="comment__content">
                        {this.props.comment}
                    </p>
                </div>
            </div>)}};
 
    export default Comment;