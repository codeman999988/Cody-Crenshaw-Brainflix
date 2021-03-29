import React from 'react';
import "./NextVideoItem.scss";
import {Link} from 'react-router-dom';


const NextVideoItem = (props) => {

return (
    <div 
    className='videoItem__container' 
    key={props.id}>
        <Link to={`/video/${props.id}`} >
            <img  
            className="videoItem__image" 
            alt={props.alt} 
            src={props.image} 
            id={props.id}/>
        </Link>
        <div className="videoItem__txt-container">
            <h3 className="videoItem__title">
                {props.title}
            </h3>
            <h4 className="videoItem__author">
                {props.channel}
            </h4>
        </div>
    </div>
)
}

export default NextVideoItem;

