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

class App extends Component {
  
  state={
    CurrentVideo: StateArray[0],
    VideoArray: StateArray,
  }

  handleSubmit = (event) => {
  }

  render () {
    const site = this.state;
    return (
    <div className="App">
      <Header />
      <HeroVideo 
        poster={site.CurrentVideo.image}
      />
      <div className="desktop-container">
        <div className="desktop-art-container">
          <Article 
            title= {site.CurrentVideo.title}
            channel= {site.CurrentVideo.channel}
            desc= {site.CurrentVideo.description}
            date= {site.CurrentVideo.timestamp}
            views= {site.CurrentVideo.views}
            likes= {site.CurrentVideo.likes}
            comments= {site.CurrentVideo.comments.length}
          />
          <CommentSection 
            commentArray= {site.CurrentVideo.comments}
          />
          </div>
          <>
          <NextVideoList 
          vidArray= {site.VideoArray.filter((obj) => obj !== site.CurrentVideo)}
          whenClicked= { (e) => {
          const answer = StateArray.find((obj) => obj.id === e.target.id);
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
