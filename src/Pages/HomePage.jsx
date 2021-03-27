import React, { Component } from 'react';
import '../components/HeroVideo/HeroVideo.scss';
import Article from '../components/Article/Article';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import CommentSection from '../components/CommentSection/CommentSection';
import NextVideoList from '../components/NextVideoList/NextVideoList';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

 class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    
    state={currentVideo: this.props.currentVideo,
           videoArray: this.props.videoArray, 
    }

    render() {
        console.log(this.props);
        return (
            <>
            {/* <div className="hero__video-container">
                <video poster={this.props.poster.image}  className="hero__video" controls={true}>
                    <source></source>
                </video>
            </div> */}
            <HeroVideo currentVideo={this.props.currentVideo} videoArray={this.props.videoArray} />
            <div className="desktop-container">
              <div className="left-side">
            <Article currentVideo={this.props.currentVideo} videoArray={this.props.videoArray}/>
            <CommentSection currentVideo={this.props.currentVideo} videoArray={this.props.videoArray}/>
            </div>
            <NextVideoList currentVideo={this.props.currentVideo} videoArray={this.props.videoArray}/>
            {/* video={this.props.video}  */}
            </div>
            </>
            )
    }
}

export default HomePage;
