import React, { Component } from 'react'
import './App.scss';
import Header from "./components/Header/Header.jsx";
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import axios from 'axios';
import UploadPage from './Pages/UploadPage';
import VideoPage from './Pages/VideoPage';



//"api_key": "5ded7161-325c-4ff1-9693-25657ee3c456

const test = "/video/testertester";
console.log(test.slice(7));

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
      this.setState({currentVideo: window.location.pathname.slice(7),videoArray: result.data});
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.currentVideo !== prevState.currentVideo){
      this.setState({currentVideo: window.location.pathname.slice(7)})
    }
  }




  
  render () {
 
    console.log(this.props);
    console.log(window);
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
