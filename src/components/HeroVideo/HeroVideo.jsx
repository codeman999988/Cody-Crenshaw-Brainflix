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
            
            <video poster={this.props.poster}  className="hero__video">
            <source></source>
            </video>
            
            )
    }
}

export default HeroVideo;



