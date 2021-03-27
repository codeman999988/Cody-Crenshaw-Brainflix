import React, { Component } from 'react';
import './HeroVideo.scss';
import Article from '../Article/Article';
import {BrowserRouter as Router} from "react-router-dom";

 class HeroVideo extends Component {
    constructor(props) {
        super(props);
    }

    // state= {currentVideo: "",
    //         videoVideo: null
    // }

//  console.log(this.props.videoArray.find(eL => eL.id == this.state.currentVideo))
 

    componentDidMount() {
        // console.log(this.props.match.params);
        // console.log(this.props)
        // console.log(this.props.videoArray);
        // console.log(this.props.match.params.id);
        
        // this.setState({currentVideo: this.props.videoArray.find(eL => eL.id == this.props.match.params.id).image});
        // console.log(this.state);
    }

    componentDidUpdate(prevProps, prevState){
if(this.props == prevProps){
    console.log("why?");
}
    }


    render() {
        // console.log(this.props.match.params);
        console.log(this.props);
        // console.log(this.props.videoArray && this.props.currentVideo && this.props.videoArray.find(eL => eL.id == this.props.currentVideo.id).image)
        // const video = this.props.videoArray.find(eL => eL.id == this.props.match.params.id);
        // console.log(this.props.videoArray.find(eL => eL.id == this.state.currentVideo).image)
        return (
            <>
            {/* {console.log(this.props)} */}
            <div className="hero__video-container">
                <video poster={this.props.videoArray && this.props.currentVideo && this.props.videoArray.find(eL => eL.id == this.props.currentVideo).image}  className="hero__video" controls={true}>
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



