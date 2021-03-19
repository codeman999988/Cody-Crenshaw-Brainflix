import React, {Component} from 'react'
import './CommentSection.scss';
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import Moment from 'moment';

class CommentSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <section className="Comments__Container">
            <CommentForm />
            {this.props.commentArray.map((comment) =>{
                return (
                    <Comment
                    name={comment.name}
                    date={Moment(comment.timestamp).fromNow()}
                    comment={comment.comment}
                    />
                )
            })}
            

        </section>
    );
}
}

export default CommentSection;
