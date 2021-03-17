import React from 'react'
import './CommentSection.scss';
import Comment from "../Comment/Comment"
import CommentForm from "../CommentForm/CommentForm"

function CommentSection() {
    return (
        <section className="Comments__Container">
            <CommentForm />
            <Comment />
        </section>
    )
}

export default CommentSection;
