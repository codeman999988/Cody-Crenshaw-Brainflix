import React, { Component } from 'react';
import "./NextVideoItem.scss";
import VideoDetails from "../../Data/video-details.json";

console.log(VideoDetails);



 class NextVideoItem extends Component {
    
    state= {
        objectIndex: 0,
    }

    handleClick = () => {
        console.log("clickty clack");
    }
    
    render() {
        return (
            <div onclick={this.handleClick} className='nextVideoItem__container' key={this.id}>
                <img className="nextVideoItem__image"src={this.image}/>
                <div className="nextVideoItem__txt-container">
                    <h3>
                        {this.title}
                    </h3>
                    <h4>
                        By {this.channel}
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
