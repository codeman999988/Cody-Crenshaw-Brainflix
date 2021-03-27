import React, { Component } from 'react';
import '../components/HeroVideo/HeroVideo.scss';
import Article from '../components/Article/Article';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import CommentSection from '../components/CommentSection/CommentSection';
import NextVideoList from '../components/NextVideoList/NextVideoList';
import axios from 'axios';

 class VideoPage extends Component {
    constructor(props) {
        super(props);
    }
    
    state={currentVideo: this.props.match.params.id,
            videoArray: null,
    }



    componentDidMount() {
        axios
        .get("https://project-2-api.herokuapp.com/videos?api_key=5ded7161-325c-4ff1-9693-25657ee3c456")
        .then(result => {
        //   console.log(result.data[0].id);
          this.setState({currentVideo: this.props.match.params.id, videoArray: result.data});
        })
      }


    componentDidUpdate (prevProps, prevState) {
    if(prevState.currentVideo !== this.props.match.params.id){
        this.setState({currentVideo: this.props.match.params.id})
    }
    console.log("updated");
    console.log(prevProps);
    console.log(this.props);
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
            <HeroVideo currentVideo={this.state.currentVideo} videoArray={this.props.videoArray}  />
            <div className="desktop-container">
              <div className="left-side">
            <Article currentVideo={this.props.currentVideo} videoArray={this.props.videoArray} />
            <CommentSection currentVideo={this.props.currentVideo} videoArray={this.props.videoArray}/>
            </div>
            <NextVideoList currentVideo={this.props.currentVideo} videoArray={this.props.videoArray}/>

            </div>
            </>
            )
    }
}
export default VideoPage;
