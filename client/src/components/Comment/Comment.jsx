import axios from 'axios';
import React, { Component } from 'react';
import './Comment.scss';


class Comment extends Component  {
    constructor(props){
        super(props)
    }

state = {
    commentslength: this.props.commentsArray.length
}

    // tryDeleteComment(e) {
    //     console.log(this.props);
    //     axios
    //     .delete(`http://localhost:8080/video-details/${this.props.currentVideo}/comments/${this.props.id}`)
    //     .then(result =>{ 
    //         this.setState({commentslength: (this.state.commentsArray.length) - 1});
    //         console.log(result)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }
    componentDidUpdate(prevState, prevProps){
        if(this.state.commentDeleted !== this.props.id){
            this.setState({commentDeleted: this.props.id})
        }
    }

render(){
    const {name, date, id, comment} = this.props;
return (
    <div className="comment">
        <div className="comment__image-container">
            <div className="comment__image comment__comment-profile-pic">
            </div>
        </div>
    <div className="comment__container">
        <div className="comment__name-date-cont">
            <div>
            <p className="comment__name"> {name}
            </p>
            <p className="comment__date"> {date}
            </p>
            </div>
            <button 
                className="comment__dlt-btn"
                id={id}
                onClick={(props)=>{
                    this.props.deleteComment(props)}} >X
            </button>
        </div> 
        <p className="comment__content"> {comment}
        </p>
    </div>
</div>
)}}

export default Comment;