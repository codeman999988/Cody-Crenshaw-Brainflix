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
        <section className="comments__container">
            <CommentForm />
                {this.props.commentArray.map((comm) =>{
                return (
                    <Comment
                    name={comm.name}
                    date={Moment(comm.timestamp).fromNow()}
                    comment={comm.comment}
                    key={comm.id}
                    />
                        )
                    })
                }
        </section>
            );
        }
}

export default CommentSection;
