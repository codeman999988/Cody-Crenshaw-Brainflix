import React, {Component} from 'react';
import './Article.scss';
import ViewsIcon from '../../assets/Icon-views.svg';
import LikesIcon from '../../assets/Icon-likes.svg';
import Moment from 'moment';
import axios from 'axios';

class Article extends Component {

    state= {
        articleTitle: "",
        articleChannel: "",
        articleTimestamp: "",
        articleViews: "",
        articleLikes: ""
}

    componentDidMount(){
        axios
        .get(`http://localhost:8080/videos/${this.props.currentVideo}`)
        .then(result =>{

            this.setState({
                articleTitle: result.data.title, 
                articleChannel: result.data.channel, 
                articleTimestamp: result.data.timestamp, 
                articleViews: result.data.views, 
                articleLikes: result.data.likes,
                articleDesc: result.data.description
            })
        })
    }

    componentDidUpdate(prevProps){
        if(this.props.currentVideo !== prevProps.currentVideo){
        axios
        .get(`http://localhost:8080/videos/${this.props.currentVideo || '1af0jruup5gu'}`)
        .then(result =>{

            this.setState({
                articleTitle: result.data.title, 
                articleChannel: result.data.channel, 
                articleTimestamp: result.data.timestamp, 
                articleViews: result.data.views, 
                articleLikes: result.data.likes,
                articleDesc: result.data.description
            })
        })
    }}

render() {
    
    const {articleTitle, articleTimestamp, articleViews, articleLikes, articleDesc, articleChannel} = this.state;
    return (
        <div className="article__container">
            <h1 className="article__title">
                {articleTitle}
            </h1>
            <div className="article__stats-container">
                <div className="article__channel-date-container">
                    <h3 className="article__channel">
            By {articleChannel}
                    </h3>
                    <h4 className="article__date">
                        {Moment(articleTimestamp).fromNow()}
                    </h4>
                </div>
                <div className="article__like-views-container">
                    <div className="article__views-container">
                        <img src={ViewsIcon} alt="View Counter"/>
                        <h4 className="article__counter">
                            {articleViews}
                        </h4>
                    </div>
                    <div className='article__likes-container'>
                        <img src={LikesIcon} alt="Like Counter" />
                        <h4 className="article__counter">
                            {articleLikes}
                        </h4>
                    </div>
                </div>
            </div>
                <p className="article__content">
                    {articleDesc}
                </p>
        </div>
    )
}    
}
export default Article;