import React from 'react';
import "./NextVideoItem.scss";
import VideoDetails from "../Data/video-details.json";

console.log(VideoDetails);

    const NextVideoItem = () => {
    VideoDetails.map(({id, title, image}) => {
        return (<div>
        <img src={image}/>
        <div>
            <h3>
                {title}
            </h3>
            <h4>
                {id}
            </h4>
        </div>
    </div>)
    }
        
        
            
        
    )
}

export default NextVideoItem;
