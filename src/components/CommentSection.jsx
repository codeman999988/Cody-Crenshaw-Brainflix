import React from 'react'
import './CommentSection.scss';
import Comment from "./Comment"
import CommentForm from "./CommentForm"

function CommentSection() {
    return (
        <section className="Comments__Container">
            <CommentForm />
            <Comment />
            <Comment />
            <Comment />
        </section>
    )
}

export default CommentSection;
