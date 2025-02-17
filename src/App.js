import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Sample from './components/sample';
import Props from './components/Props';
import Cards from './components/Cards';
import Home from './Home';
import Login from './components/login';
import DragAndDropList from './components/DragList';
import VideoStreamingApp from './components/Videos';
function App() {
  return (
    <div class="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/props" element={<Props />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/DragList" element={<DragAndDropList />} />
        <Route path="/video" element={<VideoStreamingApp/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
