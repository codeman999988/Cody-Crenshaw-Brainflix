import React, {Component} from 'react';
import './Article.scss';
import ViewsIcon from '../../assets/Icon-views.svg';
import LikesIcon from '../../assets/Icon-likes.svg';
import Moment from 'moment';
import axios from 'axios';



class Article extends Component {
    constructor(props) {
        super(props);
    }

    state= {
        articleTitle: "",
        articleChannel: "",
        articleTimestamp: "",
        articleViews: "",
        articleLikes: ""
}

    componentDidMount(){
        axios
        .get(`https://project-2-api.herokuapp.com/videos/${this.props.currentVideo}?api_key=5ded7161-325c-4ff1-9693-25657ee3c456`)
        .then(result =>{
            console.log(result)
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
        if(this.props.currentVideo !== prevProps.currentVideo)
        axios
        .get(`https://project-2-api.herokuapp.com/videos/${this.props.currentVideo}?api_key=5ded7161-325c-4ff1-9693-25657ee3c456`)
        .then(result =>{
            console.log(result)
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
    render() {
        console.log(this.props)
        // const video = this.props.video;
        // console.log(video.title);
        return (
            <div className="article__container">
                <h1 className="article__title">
                    {this.state.articleTitle}
                </h1>
                <div className="article__stats-container">
                    <div className="article__channel-date-container">
                        <h3 className="article__channel">
                By {this.state.articleChannel}
                        </h3>
                        <h4 className="article__date">
                            {Moment(this.state.articleTimestamp).fromNow()}
                        </h4>
                    </div>
                    <div className="article__like-views-container">
                        <div className="article__views-container">
                            <img src={ViewsIcon} />
                            <h4 className="article__counter">
                                {this.state.articleViews}
                            </h4>
                        </div>
                        <div className='article__likes-container'>
                            <img src={LikesIcon}/>
                            <h4 className="article__counter">
                                {this.state.articleLikes}
                            </h4>
                        </div>
                    </div>
                </div>
                    <p className="article__content">
                        {this.state.articleDesc}
                    </p>
                {/* <h2 className='comments__title'>
                    {video.comments.length} Comments
                </h2> */}
            </div>
        )
    }    
}
export default Article;