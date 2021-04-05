import React, {Component} from 'react'
import './CommentSection.scss';
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import Moment from 'moment';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

class CommentSection extends Component {
    constructor(props) {
        super(props);
    
    this.state={commentsArray: null}
    this.postComment=this.postComment.bind(this);
}


postComment = (e) => {
    e.preventDefault();
    let newid= uuidv4();
    axios
    .post(`http://localhost:8080/video-details/${this.props.currentVideo}/comments`, 
      {  
          name: `${e.target.name.value}`,
          comment: `${e.target.commentField.value}`,
          id: `${newid}`,
          timestamp: Date().getTime
        })
    .then(response => {
          this.setState({lastCommentPosted: e.target.name.value});
          e.target.reset();
        })
    .catch(err => {
          console.warn(err)
        })
      }

deleteComment(e) {
axios
    .delete(`http://localhost:8080/video-details/${this.props.currentVideo}/comments/${e.target.id}`)
    .then(result =>{ 
        this.setState({commentDeleted: true});
    })
    .catch(err=>{
        console.log(err)
    })
}



componentDidMount() {
    axios
        .get(`http://localhost:8080/video-details/${this.props?.currentVideo}/comments`)
        .then(result => {
           const APIcomments = result.data.comments;
        this.setState({commentsArray: APIcomments?.sort(function(a,b) {
            return a.timestamp - b.timestamp;
        })})
    })
}

componentDidUpdate(prevProps, prevState) {
    if(this.props.currentVideo !== prevProps.currentVideo
    || this.state.commentsArray === prevState.commentsArray) {
    axios
        .get(`http://localhost:8080/video-details/${this.props.currentVideo}/comments`)
        .then(result => {
            const APIcomments = result.data.comments;
            this.setState({commentsArray: APIcomments?.sort(function(a,b) {
            return a.timestamp - b.timestamp;
        })});
    })}
}

render() {
    return (
    <section className="comments__container">
        <CommentForm 
            commentsArray={this.state.commentsArray?.length}
            postComment={(e)=>{this.postComment(e)}} />
    {this.state.commentsArray?.reverse().map((comm, i) =>{ return (
        <Comment
            commentsArray={this.state.commentsArray}
            name={comm.name}
            date={Moment(comm.timestamp).fromNow()}
            comment={comm.comment}
            key={comm.id}
            currentVideo={this.props.currentVideo}
            id={comm.id}
            deleteComment={(props)=>{
                this.deleteComment(props)
        }}
        />
        )})}
    </section>
);}
}

export default CommentSection;
