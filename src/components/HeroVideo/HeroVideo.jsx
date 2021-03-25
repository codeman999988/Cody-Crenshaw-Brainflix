import React, { Component } from 'react';
import './HeroVideo.scss';
import Article from '../Article/Article';
import {BrowserRouter as Router} from "react-router-dom";

 class HeroVideo extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidUpdate(prevProps, prevState){
        
    }

    render() {
        console.log(this.props.match.params);
        console.log(this.props)
        const video = this.props.videoArray.find(eL => eL.id == this.props.match.params.id);
        return (
            <>
            <div className="hero__video-container">
                <video poster={this.props.currentVideo.image}  className="hero__video" controls={true}>
                    <source></source>
                </video>
            </div>
            {/* <Article video={this.props.video} /> */}
            </>
            )
    }
}

export default HeroVideo;

{/* <video poster={this.props.poster.find(eL => eL.id == this.props.match.params.id).image}  className="hero__video" controls={true}> */}



