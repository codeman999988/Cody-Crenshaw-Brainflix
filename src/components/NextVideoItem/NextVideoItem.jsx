import React, { Component } from 'react';
import "./NextVideoItem.scss";
import VideoDetails from "../../Data/video-details.json";

console.log(VideoDetails);

let videoState = "";

 class NextVideoItem extends Component {
    constructor(props) {
        super(props);
    }
  

    handleClick = (e) => {
        ;
    }
    
    render() {
        return (
            <>
            <div className='videoItem__container' key={this.props.id}>
                <img onClick={this.props.whenClicked}  className="videoItem__image" src={this.props.image} id={this.props.id}/>
                <div className="videoItem__txt-container">
                    <h3 className="videoItem__title">
                        {this.props.title}
                    </h3>
                    <h4 className="videoItem__author">
                       {this.props.channel}
                    </h4>
                </div>
            </div>
            </>
        )
    }
}



// const NextVideoItem = (props) => {
//         const data = VideoDetails;
//         const answers = data.map((deets) => {
//             return   (
//             )});
//             return answers;}
                 
          



export default NextVideoItem;
