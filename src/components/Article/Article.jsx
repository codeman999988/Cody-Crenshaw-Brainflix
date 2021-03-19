import React, {Component} from 'react';
import './Article.scss';
import ViewsIcon from '../../assets/Icon-views.svg';
import LikesIcon from '../../assets/Icon-likes.svg'; 



class Article extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <div className="article__container">
                <h1 className="article__title">{this.props.title}</h1>
                <div className="article__channel-date-container">
            <h3 className="article__channel">By {this.props.channel}</h3>
                    <h4 className="article__date">{this.props.date}</h4>
                </div>
                <div className="article__like-views-container">
                    <div className="article__views-container">
                        <img src={ViewsIcon} />
                        <h4 className="article__counter">{this.props.views}</h4>
                    </div>
                    <div className='article__likes-container'>
                        <img src={LikesIcon}/>
                        <h4 className="article__counter">{this.props.likes}</h4>
                    </div>
                </div>
                <p className="article__content">{this.props.desc}</p>
                <h2 className='comments__title'>{this.props.comments} Comments</h2>
            </div>
        )
    }    
}
        export default Article;






            //         articles.map(article => 
            //             <Article
            //             title ={article.title}
            //             channel={article.channel}
            //             image={article.image}
            //             description={article.description}
            //             views={article.views}
            //             likes={article.likes}
            //             timestamp={article.timestamp}
            //             comments={article.comments}
            //             id={article.id} />)
    
            //         }
    
            //             </section>)
            // }
            
//             <section>{
//                 <div>
//     <h2>By {props.element.channel}</h2>
//     <h4>{props.element.timestamp}</h4>
// </div>
// <div>
//     <div>
//         <img />
//         <p>{props.element.views}</p>
//     </div>
//     <div>
//         <img />
//         <p>{props.element.likes}</p>
//     </div>
// </div>
// <article>{props.element.description}
// </article>

//         </section>