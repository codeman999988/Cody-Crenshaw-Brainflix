import React from 'react';
import "./NextVideoItem.scss";
import VideoDetails from "../Data/video-details.json";

console.log(VideoDetails);

    const NextVideoItem = (props) => {
        const data = VideoDetails;
        const answers = data.map((deets) => {
            return   (
            <div className='nextVideoItem__container' key={deets.id}>
            <img className="nextVideoItem__image"src={deets.image}/>
            <div>
                <h3>
                    {deets.title}
                </h3>
                <h4>
                    By {deets.channel}
                </h4>
            </div>
            </div>)});
            return answers;}
                 
          



export default NextVideoItem;
