import React, { Component } from 'react'
import './App.scss';
import Header from "./components/Header/Header.jsx";
import HeroVideo from "./components/HeroVideo/HeroVideo.jsx";
import Article from "./components/Article/Article.jsx";
import CommentSection from './components/CommentSection/CommentSection.jsx'
import NextVideoList from './components/NextVideoList/NextVideoList.jsx';
import VideoDetails from "./Data/video-details.json";
import cloneDeep from 'lodash';
console.log(VideoDetails);


let VideoState = cloneDeep(VideoDetails);

let StateArray = VideoState.__wrapped__;
console.log(StateArray);

class App extends Component {
  
  state={
    CurrentVideo: StateArray[0],
    VideoArray: StateArray,
  }

  render () {
    return (
    <div className="App">
      <Header />
      <HeroVideo 
      poster={this.state.CurrentVideo.image}
      />
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
      <NextVideoList 
      vidArray= {this.state.VideoArray}
      whenClicked= {
        this.setState()
      }
      />
    </div>
  );
}}

export default App;

