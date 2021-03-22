import React, {Component} from 'react';
import './Article.scss';
import ViewsIcon from '../../assets/Icon-views.svg';
import LikesIcon from '../../assets/Icon-likes.svg';
import Moment from 'moment';



class Article extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const video = this.props;
        return (
            <div className="article__container">
                <h1 className="article__title">
                    {video.title}
                </h1>
                <div className="article__stats-container">
                    <div className="article__channel-date-container">
                        <h3 className="article__channel">
                By {video.channel}
                        </h3>
                        <h4 className="article__date">
                            {Moment(video.date).fromNow()}
                        </h4>
                    </div>
                    <div className="article__like-views-container">
                        <div className="article__views-container">
                            <img src={ViewsIcon} />
                            <h4 className="article__counter">
                                {video.views}
                            </h4>
                        </div>
                        <div className='article__likes-container'>
                            <img src={LikesIcon}/>
                            <h4 className="article__counter">
                                {video.likes}
                            </h4>
                        </div>
                    </div>
                </div>
                    <p className="article__content">
                        {video.desc}
                    </p>
                <h2 className='comments__title'>
                    {video.comments} Comments
                </h2>
            </div>
        )
    }    
}
export default Article;