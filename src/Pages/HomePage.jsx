import React, { Component } from 'react';
import '../components/HeroVideo/HeroVideo.scss';
import Article from '../components/Article/Article';

 class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    
ß
    render() {
        console.log(this.props);
        return (
            <>
            <div className="hero__video-container">
                <video poster={this.props.poster.image}  className="hero__video" controls={true}>
                    <source></source>
                </video>
            </div>
            {/* <Article video={this.props.video} /> */}
            </>
            )
    }
}

export default HomePage;