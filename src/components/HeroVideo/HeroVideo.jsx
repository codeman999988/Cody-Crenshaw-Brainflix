import React, { Component } from 'react';
import './HeroVideo.scss';
import VideoDetails from "../../Data/video-details.json";

let displayVideoArray = VideoDetails.map((show) =>{
    return show.title
})

console.log(VideoDetails[0]);

 class HeroVideo extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="hero__video-container">
            <video poster={this.props.poster}  className="hero__video" controls="true">
           
            <source></source>
            </video>
            </div>
            )
    }
}

export default HeroVideo;



