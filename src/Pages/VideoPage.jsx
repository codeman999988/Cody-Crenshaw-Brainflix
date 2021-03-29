import React, { Component } from 'react';
import '../components/HeroVideo/HeroVideo.scss';
import Article from '../components/Article/Article';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import CommentSection from '../components/CommentSection/CommentSection';
import NextVideoList from '../components/NextVideoList/NextVideoList';
import axios from 'axios';

class VideoPage extends Component {
    
    state={currentVideo: "1af0jruup5gu",
            videoArray: null,
    }

componentDidMount() {
    if(this.props.match.params.id){
    axios
    .get("https://project-2-api.herokuapp.com/videos?api_key=5ded7161-325c-4ff1-9693-25657ee3c456")
    .then(result => {
        this.setState({
            currentVideo: this.props.match.params.id, 
            videoArray: result.data 
        });
    }).catch(err =>{
        console.warn(err);
    })
    }
}

componentDidUpdate (prevProps) {
if(prevProps.match.params.id !== this.props.match.params.id) {
    this.setState({
        currentVideo: this.props.match.params.id ?? "1af0jruup5gu"
    })
}}

render() {
    return (
<>
    <HeroVideo 
    currentVideo={this.state.currentVideo} 
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
        videoArray={this.props.videoArray?.filter(el => el.id !== this.state.currentVideo)} />
    </div>
</>
)}
}
export default VideoPage;
