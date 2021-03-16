import './App.scss';
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import Article from "./components/Article";
import CommentSection from './components/CommentSection'
import NextVideoList from './components/NextVideoList'

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
