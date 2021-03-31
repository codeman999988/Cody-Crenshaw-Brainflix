import React, {Component} from 'react'
import './CommentSection.scss';
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import Moment from 'moment';
import axios from "axios";

class CommentSection extends Component {
    constructor(props) {
        super(props);
    
    this.state={commentsArray: null}
    this.postComment=this.postComment.bind(this);
}


postComment = (e) => {
    e.preventDefault();
    axios
    .post(`http://localhost:8080/videoDetails/comments/${this.props.currentVideo}`, 
      {  
          name: `${e.target.name.value}`,
          comment: `${e.target.commentField.value}`
        })
    .then(response => {
          this.setState({lastCommentPosted: e.target.name.value});
          e.target.reset();
        })
    .catch(err => {
          console.warn(err)
        })
      }

componentDidMount() {
    axios
        .get(`http://localhost:8080/videoDetails/comments/${this.props?.currentVideo}`)
        .then(result => {
        this.setState({commentsArray: result.data.comments?.sort(function(a,b) {
            return a.timestamp - b.timestamp;
        })})
    })
}

componentDidUpdate(prevProps, prevState) {
    if(this.props.currentVideo !== prevProps.currentVideo
    || this.state.commentsArray === prevState.commentsArray) {
    axios
        .get(`http://localhost:8080/videoDetails/comments/${this.props.currentVideo}`)
        .then(result => {
            this.setState({commentsArray: result.data.comments?.sort(function(a,b) {
            return a.timestamp - b.timestamp;
        })});
    })}
}

render() {
    console.log(this.props);
    console.log(this.state);
    return (
        <section className="comments__container">
            <CommentForm 
            commentsArray={this.state.commentsArray?.length}
            postComment={(e)=>{this.postComment(e)}} />
            {this.state.commentsArray?.reverse().map((comm) =>{ return (
            <Comment
            name={comm.name}
            date={Moment(comm.timestamp).fromNow()}
            comment={comm.comment}
            key={comm.id}
            />
            )})}
        </section>
);}
}

export default CommentSection;
