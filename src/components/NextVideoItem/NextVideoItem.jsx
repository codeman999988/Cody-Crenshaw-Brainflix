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
            <div onClick={this.handleClick} className='nextVideoItem__container' key={this.props.id}>
                <img className="nextVideoItem__image"src={this.props.image}/>
                <div className="nextVideoItem__txt-container">
                    <h3>
                        {this.props.title}
                    </h3>
                    <h4>
                        By {this.props.channel}
                    </h4>
                </div>
            </div>
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
