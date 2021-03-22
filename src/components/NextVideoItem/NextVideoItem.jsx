import React, { Component } from 'react';
import "./NextVideoItem.scss";


 class NextVideoItem extends Component {
    constructor(props) {
        super(props);
    }
  
    
    render() {
        const video = this.props;
        return (
            <>
            <div className='videoItem__container' key={video.id}>
                <img onClick={video.whenClicked}  className="videoItem__image" alt={video.alt} src={video.image} id={video.id}/>
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
