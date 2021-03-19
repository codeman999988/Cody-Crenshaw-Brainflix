import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './Comment.scss';
import VideoDetails from "../../Data/video-details.json";

console.log(VideoDetails);

    
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
                        <p className="comment__date">{this.props.date}
                        </p>
                    </div> 
                    <p className="comment__content">
                        {this.props.comment}
                    </p>
                    {/* <div className="comment__btn-container">
                        <button type="submit" className="comment__delete-btn" name="">Delete comment
                        </button>
                        <div className='comment__like-btn-cont'>
                            <button type="submit" className="comment__like-btn" name="">♡
                            </button> {} likes
                        </div>
                    </div> */}
                </div>
            </div>)}};
 
    export default Comment;
    













// const Comment = (props) => {
//         const data = VideoDetails[0].comments;
//         const answers = data.map((deets) => {
//             for(let i=0; i < data.length; i++){return   (
                
//             return answers;}




// const Comment = () =>{
//     return (
//         <div className="comment">
//             <div className="comment__image-container">
//                 <div className="comment__image comment__comment-profile-pic">
//                 </div>
//             </div>
//             <div className="comment__container">
//                 <div className="comment__name-date-cont">
//                     <p className="comment__name">
//                     </p>
//                     <time className="comment__date">
//                     </time>
//                 </div> 
//                 <p className="comment__content">{deets}
//                 </p>
//                 <div className="comment__btn-container">
//                     <button type="submit" className="comment__delete-btn" name="">Delete comment
//                     </button>
//                     <div className='comment__like-btn-cont'>
//                         <button type="submit" className="comment__like-btn" name="">♡
//                         </button>{deets.comments[i].likes}  likes
//                     </div>
//                 </div>
//             </div>
//         </div>)}

        // export default Comment;