import React, {Component} from 'react'
import './CommentSection.scss';
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import Moment from 'moment';
import axios from "axios";

class CommentSection extends Component {
    constructor(props) {
        super(props);
    }

    state={commentsArray: []}


    // componentDidMount() {axios
    //     .get(`https://project-2-api.herokuapp.com/videos/${this.props.video.id}?api_key=5ded7161-325c-4ff1-9693-25657ee3c456`)
    //     .then(result =>{
    //         this.setState({commentsArray: result.data.comments});
    //     })
    // }

componentDidMount() {
    axios
    .get(`https://project-2-api.herokuapp.com/videos/${this.props.currentVideo}?api_key=5ded7161-325c-4ff1-9693-25657ee3c456`)
    .then(result => {
        this.setState({commentsArray: result.data.comments})
    })
}

componentDidUpdate(prevProps) {
    if(this.props.currentVideo !== prevProps.currentVideo){
    axios
    .get(`https://project-2-api.herokuapp.com/videos/${this.props.currentVideo}?api_key=5ded7161-325c-4ff1-9693-25657ee3c456`)
    .then(result => {
        this.setState({commentsArray: result.data.comments});
        console.log("check")
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
    console.log(this.props)
    return (
        <section className="comments__container">
            <CommentForm />
                {this.state.commentsArray.map((comm) =>{
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
