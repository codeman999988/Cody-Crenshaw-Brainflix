import React, { Component } from 'react';
import './HeroVideo.scss';
import Article from '../Article/Article';

 class HeroVideo extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        console.log(this.props);
        return (
            <>
            <div className="hero__video-container">
                <video poster={this.props.poster}  className="hero__video" controls={true}>
                    <source></source>
                </video>
            </div>
            <Article video={this.props.video} />
            </>
            )
    }
}

export default HeroVideo;



