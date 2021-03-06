import React, { Component } from 'react'
import './App.scss';
import Header from "./components/Header/Header.jsx";
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import axios from 'axios';
import UploadPage from './Pages/UploadPage';
import VideoPage from './Pages/VideoPage';

class App extends Component {
  
  state={
    CurrentVideo: '1af0jruup5gu',
    videoArray: null,
  }

  
componentDidMount() {
  axios
  .get("http://localhost:8080/videos")
  .then(result => {
    this.setState({
      currentVideo: window.location.pathname.slice(8) || "1af0jruup5gu",
      videoArray: result.data});
  }
  )
  .catch ((error)=>{
    console.log(error)
  })
}

componentDidUpdate(_, prevState) {
  if(this.state.currentVideo !== prevState.currentVideo){
    this.setState({
      currentVideo: window.location.pathname.slice(8)
    })
  }
}

render () {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route 
            exact path='/' 
            render={(routeProps) => <VideoPage currentVideo={this.state.currentVideo} videoArray={this.state.videoArray} {...routeProps}  />} />
          <Route 
            path='/videos/:id' 
            render={(routeProps) => this.state.videoArray && <VideoPage currentVideo={this.state?.currentVideo} 
            videoArray={this.state?.videoArray} {...routeProps}  />} />
          <Route 
            path='/upload' 
            render={(routeProps) => <UploadPage {...routeProps} />} />
        </Switch>
      </Router>
    </div>
);
}}

export default App;
