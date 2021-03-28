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
import { relativeTimeThreshold } from 'moment';
import UploadPage from './Pages/UploadPage';
import VideoPage from './Pages/VideoPage';



//"api_key": "5ded7161-325c-4ff1-9693-25657ee3c456


class App extends Component {
  
  state={
    CurrentVideo: '',
    VideoArray: null,
  }



  componentDidMount() {
    axios
    .get("https://project-2-api.herokuapp.com/videos?api_key=5ded7161-325c-4ff1-9693-25657ee3c456")
    .then(result => {
      // console.log(result.data[0].id);
      this.setState({currentVideo: result.data[0].id,videoArray: result.data}, this.cbfunction);
    })
  }

  componentDidUpdate(prevProps, prevState){
    // if(this.state != prevState){
    //   this.setState({})
      // axios
      // .get("https://project-2-api.herokuapp.com/videos?api_key=5ded7161-325c-4ff1-9693-25657ee3c456")
      // .then(result => {
      //   console.log(result.data[0].id);
      //   this.setState({currentVideo: result.data[0].id,videoArray: result.data});
      // })
    }


  
  render () {
 
    // console.log(this.props)
    return (
 
    <div className="App">
            <Router>
      <Header />

        <Switch>
          <Route exact path='/' render={(routeProps) => <VideoPage currentVideo={"1af0jruup5gu"} videoArray={this.state.videoArray} {...routeProps}  />} 
      />
      <Route path='/video/:id' render={(routeProps) => this.state.videoArray && <VideoPage currentVideo={this.state.currentVideo} videoArray={this.state.videoArray} {...routeProps}  />} />
      <Route path='/upload' render={(routeProps) => <UploadPage {...routeProps} />} />
          </Switch>
          </Router>
      </div>

  );
}}

export default App;

// const answer = StateArray.find((obj) => obj.id === e.target.id);
            {/* <div className="desktop-container">
              <div className="left-side">
 
          <Article video={site.CurrentVideo} />

          <CommentSection 
            commentArray= {site.CurrentVideo}
          />
          </div>
          <NextVideoList 
          vidArray= {site.VideoArray.filter((obj) => obj !== site.CurrentVideo)}
          whenClicked= { (e) => {

          const answer = StateArray.find(eL => eL.id == e.target.id);
          console.log(answer);
          this.setState({CurrentVideo: answer});
          }
        } 
        />
        </div> */}
