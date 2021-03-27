import React, { Component } from 'react';
import "./NextVideoItem.scss";
import {Link, BrowserRouter as Router} from 'react-router-dom';


 class NextVideoItem extends Component {
    constructor(props) {
        super(props);
    }
  
    
    render() {
        const video = this.props;
        // console.log(this.props);
// console.log(this.props.match.params);
        return (
            <>
            <div className='videoItem__container' key={video.id}>

             <Link to={`/video/${video.id}`} >
                <img  className="videoItem__image" alt={video.alt} src={video.image} id={video.id}/>
                </Link>

            
                <div className="videoItem__txt-container">
                    <h3 className="videoItem__title">
                        {video.title}
                    </h3>
                    <h4 className="videoItem__author">
                       {video.channel}
                    </h4>
                </div>
            </div>
            </>
        )
    }
}

export default NextVideoItem;

// <img onClick={video.whenClicked}  className="videoItem__image" alt={video.alt} src={video.image} id={video.id}/>

// onClick={video.whenClicked}
