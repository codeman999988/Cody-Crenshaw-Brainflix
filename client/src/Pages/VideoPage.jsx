import React, { Component } from 'react';
import '../components/HeroVideo/HeroVideo.scss';
import Article from '../components/Article/Article';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import CommentSection from '../components/CommentSection/CommentSection';
import NextVideoList from '../components/NextVideoList/NextVideoList';
import axios from 'axios';

class VideoPage extends Component {
    
    state={currentVideo: this.props.currentVideo || "1af0jruup5gu",
            videoArray: null,
    }

componentDidMount() {
    if(true){
    axios
    .get("http://localhost:8080/videos")
    .then(result => {
        console.log(this.props)
        this.setState({
            currentVideo: this.props?.match.params.id || "1af0jruup5gu", 
            videoArray: result.data 
        });
        console.log(this.state);
        console.log(result);
    }).catch(err =>{
        console.warn(err);
    })
    }
}

componentDidUpdate (prevProps, prevState) {
if(prevProps.match.params.id !== this.props.match.params.id ) {
    axios
    .get("http://localhost:8080/videos")
    .then(result => {
        console.log(this.props.match.params);
        this.setState({
            currentVideo: this.props.match.params.id || "1af0jruup5gu", 

            videoArray: result.data 
        });
        console.log(this.state);
        console.log(result);
    }).catch(err =>{
        console.warn(err);
    })

    }
}

render() {
console.log(this.props)
    return (
<>
    <HeroVideo 
    currentVideo={this.state?.currentVideo} 
    videoArray={this.props.videoArray}  />
    <div className="desktop-container">
        <div className="left-side">
            <Article 
            currentVideo={this.state.currentVideo} 
            videoArray={this.props.videoArray} />
            <CommentSection 
            currentVideo={this.state.currentVideo} 
            videoArray={this.props.videoArray}/>
        </div>
        <NextVideoList 
        currentVideo={this.state.currentVideo} 
        videoArray={this.state.videoArray?.filter(el => el.id !== this.state.currentVideo)} />
    </div>
</>
)}
}
export default VideoPage;
