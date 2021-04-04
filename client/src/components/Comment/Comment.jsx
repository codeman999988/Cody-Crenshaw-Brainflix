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


// tryDeleteComment() {

//     axios
//     .delete(`http://localhost:8080/video-details/${this.props.currentVideo}/comments/${this.props.id}`)
//     .then(result =>{ 
//         this.setState({commentDeleted: true})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// }

tryDeleteComment(e) {
    console.log(this.props);
    axios
    .delete(`http://localhost:8080/video-details/${this.props.currentVideo}/comments/${this.props.id}`)
    .then(result =>{ 
        this.setState({commentslength: (this.state.commentsArray.length) - 1});
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })
}
componentDidUpdate(prevState, prevProps){
    if(this.state.commentDeleted !== this.props.id){
        this.setState({commentDeleted: this.props.id})
    }


}
render(){
return (
    <div className="comment">
        <div className="comment__image-container">
            <div className="comment__image comment__comment-profile-pic">
            </div>
        </div>
    <div className="comment__container">
        <div className="comment__name-date-cont">
            <div>
            <p className="comment__name">
                {this.props.name}
            </p>

            <p className="comment__date">
                {this.props.date}
            </p>
            </div>
            <button 
            id={this.props.id}
            onClick={(props)=>{
                console.log(this.props);
                this.props.deleteComment(props)
            }}
            className="comment__dlt-btn">X</button>

        </div> 
        <p className="comment__content">
            {this.props.comment}
        </p>
    </div>
</div>
)}}

export default Comment;