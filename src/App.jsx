import React, { Component } from 'react'
import './App.scss';
import Header from "./components/Header/Header.jsx";
import HeroVideo from "./components/HeroVideo/HeroVideo.jsx";
import Article from "./components/Article/Article.jsx";
import CommentSection from './components/CommentSection/CommentSection.jsx'
import NextVideoList from './components/NextVideoList/NextVideoList.jsx';
import VideoDetails from "./Data/video-details.json";
import cloneDeep from 'lodash';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import axios from 'axios';



//"api_key": "5ded7161-325c-4ff1-9693-25657ee3c456
let VideoState = cloneDeep(VideoDetails);
let StateArray = VideoState.__wrapped__;

class App extends Component {
  
  state={
    CurrentVideo: StateArray[0],
    VideoArray: StateArray,
  }

  handleSubmit = (event) => {
  }

  componentDidMount() {
    axios
    .get("https://project-2-api.herokuapp.com/videos?api_key=5ded7161-325c-4ff1-9693-25657ee3c456")
    .then(result => {
      this.setState({CurrentVideo: result.data[0],VideoArray: result.data});
    })
  }
  render () {
    const site = this.state;
    return (
 
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' render={(routeProps) => <HomePage poster={site.CurrentVideo} {...routeProps}  />} 
      />
      <Route path='/video/:id' render={(routeProps) => <HeroVideo videoArray={site.VideoArray} {...routeProps}  />} />
          </Switch>
          </Router>
            <div className="desktop-container">
              <div className="left-side">
 
          <Article video={site.CurrentVideo} />

          <CommentSection 
            commentArray= {site.CurrentVideo}
          />
          </div>
          <NextVideoList 
          vidArray= {site.VideoArray.filter((obj) => obj !== site.CurrentVideo)}
          whenClicked= { (e) => {
          const answer = StateArray[2];
          console.log(e.target.id);
          this.setState({CurrentVideo: answer});
          }
        } 
        />
        </div>
      </div>

  );
}}

export default App;

// const answer = StateArray.find((obj) => obj.id === e.target.id);
