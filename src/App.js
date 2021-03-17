import './App.scss';
import Header from "./components/Header.jsx";
import HeroVideo from "./components/HeroVideo.jsx";
import Article from "./components/Article.jsx";
import CommentSection from './components/CommentSection.jsx'
import NextVideoList from './components/NextVideoList.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroVideo />
      <Article />
      <CommentSection />
      <NextVideoList />
    </div>
  );
}

export default App;
