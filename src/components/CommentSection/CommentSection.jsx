import React, {Component} from 'react'
import './CommentSection.scss';
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import Moment from 'moment';
import axios from "axios";

class CommentSection extends Component {
    constructor(props) {
        super(props);


    this.state={commentsArray: []}
    this.postComment=this.postComment.bind(this);
}

    // componentDidMount() {axios
    //     .get(`https://project-2-api.herokuapp.com/videos/${this.props.video.id}?api_key=5ded7161-325c-4ff1-9693-25657ee3c456`)
    //     .then(result =>{
    //         this.setState({commentsArray: result.data.comments});
    //     })
    // }

    postComment = (e) => {
        e.preventDefault();
        console.log(e);
        axios.post(`https://project-2-api.herokuapp.com/videos/${this.props.currentVideo}/comments?api_key=5ded7161-325c-4ff1-9693-25657ee3c456`, 
        {  
          "name": `${e.target.name.value}`,
          "comment": `${e.target.commentField.value}`
        }).then(response => {
          this.setState({lastCommentPosted: e.target.name.value});
          e.target.reset();
        })
        .catch(err => {
          console.log(err)
        })
      }


componentDidMount() {
    axios
    .get(`https://project-2-api.herokuapp.com/videos/${this.props.currentVideo}?api_key=5ded7161-325c-4ff1-9693-25657ee3c456`)
    .then(result => {
        this.setState({commentsArray: result.data.comments.sort(function(a,b) {
            return a.timestamp - b.timestamp;
        })})
    })
}

componentDidUpdate(prevProps, prevState) {
    if(this.props.currentVideo !== prevProps.currentVideo || this.state.commentsArray == prevState.commentsArray){
   
    console.log(this.state);
    axios
    .get(`https://project-2-api.herokuapp.com/videos/${this.props.currentVideo}?api_key=5ded7161-325c-4ff1-9693-25657ee3c456`)
    .then(result => {
       console.log(result)
        // const newArray = this.state.commentsArray.concat()
        this.setState({commentsArray: result.data.comments.sort(function(a,b) {
            return a.timestamp - b.timestamp;
        })});
    })}
}

    // componentDidMount() {
    //     axios
    //     .get("https://project-2-api.herokuapp.com/videos?api_key=5ded7161-325c-4ff1-9693-25657ee3c456")
    //     .then(result => {
    //       this.setState({CurrentVideo: result.data[0],VideoArray: result.data});
    //     })
    //   }

render() {
    return (
        <section className="comments__container">
            <CommentForm postComment={(e)=>{this.postComment(e)}} />
                {this.state.commentsArray.reverse().map((comm) =>{
                return (
                    <Comment
                    name={comm.name}
                    date={Moment(comm.timestamp).fromNow()}
                    comment={comm.comment}
                    key={comm.id}
                    />
                        )
                    })
                }
        </section>
            );
        }
}

export default CommentSection;


// componentDidMount(){
//     axios
//     .get(`https://project-2-api.herokuapp.com/videos/${this.props.video.id}?api_key=5ded7161-325c-4ff1-9693-25657ee3c456`)
//     .then(result =>{
//         this.setState({commentsArray: result.data.comments})
//     })
// }
