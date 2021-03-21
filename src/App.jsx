import React, { Component } from 'react'
import './App.scss';
import Header from "./components/Header/Header.jsx";
import HeroVideo from "./components/HeroVideo/HeroVideo.jsx";
import Article from "./components/Article/Article.jsx";
import CommentSection from './components/CommentSection/CommentSection.jsx'
import NextVideoList from './components/NextVideoList/NextVideoList.jsx';
import VideoDetails from "./Data/video-details.json";
import cloneDeep from 'lodash';

let VideoState = cloneDeep(VideoDetails);

let StateArray = VideoState.__wrapped__;
//const answer = StateArray.find((obj) => obj.id === "1am3jruuwagz");
//console.log(answer);


class App extends Component {
  
  state={
    CurrentVideo: StateArray[0],
    VideoArray: StateArray,
  }

  handleSubmit = (event) => {

  }
// {if(this.state.CurrentVideo.id == "something"){

// }
// }

  render () {
    return (
    <div className="App">
      <Header />
      <HeroVideo 
      poster={this.state.CurrentVideo.image}
      />
      <div className="desktop-container">
      <div className="desktop-art-container">
      <Article 
      title= {this.state.CurrentVideo.title}
      channel= {this.state.CurrentVideo.channel}
      desc= {this.state.CurrentVideo.description}
      date= {this.state.CurrentVideo.timestamp}
      views= {this.state.CurrentVideo.views}
      likes= {this.state.CurrentVideo.likes}
      comments= {this.state.CurrentVideo.comments.length}
      />
      <CommentSection 
      commentArray= {this.state.CurrentVideo.comments}
      />
      </div>
      <>
      <NextVideoList 
      vidArray= {this.state.VideoArray.filter((obj) => obj !== this.state.CurrentVideo)}
      whenClicked= { (event) => {
        const answer = StateArray.find((obj) => obj.id === event.target.id);
        console.log(answer);
       this.setState({CurrentVideo: answer});
      }
    }
      />
      </>
      </div>
    </div>
  );
}}

export default App;
