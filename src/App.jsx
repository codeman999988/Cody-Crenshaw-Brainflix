import React, { Component } from 'react'
import './App.scss';
import Header from "./components/Header/Header.jsx";
import HeroVideo from "./components/HeroVideo/HeroVideo.jsx";
import Article from "./components/Article/Article.jsx";
import CommentSection from './components/CommentSection/CommentSection.jsx'
import NextVideoList from './components/NextVideoList/NextVideoList.jsx';
import VideoDetails from "./Data/video-details.json";
console.log(VideoDetails);


class App extends Component {
  render () {
    return (
    <div className="App">
      <Header />
      <HeroVideo />
      <Article />
      <CommentSection />
      {() => {
        VideoDetails.map((obj) => {
          return (<NextVideoList id={obj.id} image={obj.image} title={obj.title} channel={obj.channel} />)
        })
      }}
      {/* {() => {
        VideoDetails.map((obj) => {
          return (<NextVideoList id={obj.id} image={obj.image} title={obj.title} channel={obj.channel} />)
        })
      }} */}
{/*       
      <NextVideoList /> */}
    </div>
  );
}}

export default App;

