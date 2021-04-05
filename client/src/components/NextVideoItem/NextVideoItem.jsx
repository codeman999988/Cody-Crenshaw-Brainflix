import React from 'react';
import "./NextVideoItem.scss";
import {Link} from 'react-router-dom';


const NextVideoItem = (props) => {

    const {id, alt, image, title, channel} = props;
return (
    <div 
    className='videoItem__container' 
        >
        <Link to={`/videos/${id}`} >
            <img  
            className="videoItem__image" 
            alt={alt} 
            src={image} 
            id={id}/>
        </Link>
        <div className="videoItem__txt-container">
            <h3 className="videoItem__title">
                {title}
            </h3>
            <h4 className="videoItem__author">
                {channel}
            </h4>
        </div>
    </div>
)
}

export default NextVideoItem;

