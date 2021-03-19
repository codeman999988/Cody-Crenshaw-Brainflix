import React, {Component} from 'react';
import './Article.scss';



class Article extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>
            <       h3>By {this.props.channel}</h3>
                    <h4>{this.props.date}</h4>
                </div>
                <div>
                    <div>
                        <img />
                        <h4>{this.props.views}</h4>
                    </div>
                    <div>
                        <img />
                        <h4>{this.props.likes}</h4>
                    </div>
                </div>
                <h3>{this.props.desc}</h3>
                <h2>{this.props.comments} Comments</h2>
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