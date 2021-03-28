import React, { Component } from 'react';
import './HeroVideo.scss';

const HeroVideo = (props) => {


        return (
            <>
            <div className="hero__video-container">
                <video poster={(props.videoArray && props.currentVideo && props.videoArray.find(eL => eL.id === props.currentVideo).image) || (props.videoArray && props.currentVideo && props.videoArray.find(eL => eL.id === "1af0jruup5gu").image)}   className="hero__video" controls={true}>
                    <source></source>
                </video>
            </div>
            </>
            )
    }

export default HeroVideo;



