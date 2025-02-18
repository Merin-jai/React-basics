import logo from './logo.svg';
import './App.css';
 import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Sample from './components/sample';
import Props from './components/Props';
import Cards from './components/Cards';
// import Home from './Home';
import Login from './components/login';
import DragAndDropList from './components/DragList';
import VideoStreamingApp from './components/Videos';
import YouTubeVideoApp from './components/YoutubeVideo';
import Chatbot from './components/chatBot';
import SignUp from './components/SignUp';
const LazyHome = React.lazy(()=>import('./Home'));
const LazyLogin =React.lazy(()=>import('./components/login'));
function App() {
  return (
    <div class="App">
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={
                                  <React.Suspense fallback="Loading...">
                                    <LazyHome/>
                                  </React.Suspense>
                                  }/>
         <Route path="/Login" element={
                                  <React.Suspense fallback={<h3>Loading</h3>}>
                                    <LazyLogin/>
                                   </React.Suspense>
                                  }/>
        <Route path="/sample" element={<Sample />} />
        <Route path="/props" element={<Props />} />
        <Route path="/cards" element={<Cards />} />
        {/* <Route path="/Login" element={<Login/>}/> */}
        <Route path="/DragList" element={<DragAndDropList />} />
        <Route path="/yvideo" element={<YouTubeVideoApp />} />
        <Route path="/video" element={<VideoStreamingApp/>}/>
        <Route path="/chatbot" element={<Chatbot/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
