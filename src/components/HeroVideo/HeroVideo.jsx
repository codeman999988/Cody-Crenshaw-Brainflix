import React, { Component } from 'react';
import './HeroVideo.scss';

 class HeroVideo extends Component {


    // state= {currentVideo: "",
    //         videoVideo: null
    // }

//  console.log(this.props.videoArray.find(eL => eL.id == this.state.currentVideo))
 

    componentDidMount() {
        // console.log(this.props)
        // console.log(this.props.videoArray);
        
        // this.setState({currentVideo: this.props.videoArray.find(eL => eL.id == this.props.).image});
        // console.log(this.state);
    }




    render() {
        // console.log(this.props.match.params);

        // console.log(this.props.videoArray && this.props.currentVideo && this.props.videoArray.find(eL => eL.id == this.props.currentVideo.id).image)
        // const video = this.props.videoArray.find(eL => eL.id == this.props.match.params.id);
        // console.log(this.props.videoArray.find(eL => eL.id == this.state.currentVideo).image)
        return (
            <>

            <div className="hero__video-container">
                <video poster={(this.props.videoArray && this.props.currentVideo && this.props.videoArray.find(eL => eL.id == this.props.currentVideo).image) || (this.props.videoArray && this.props.currentVideo && this.props.videoArray.find(eL => eL.id == "1af0jruup5gu").image)}   className="hero__video" controls={true}>
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



