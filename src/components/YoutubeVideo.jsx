import React, { useState } from "react";
import Navbar from "./navbar";
const API_KEY = "AIzaSyCQi6eMnnEKPeJdWKtGTmiZWoGLu1p2Cfw"; 

const YouTubeVideoApp = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch videos from YouTube API
  const fetchVideos = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${API_KEY}`
    );
    const data = await response.json();
    setVideos(data.items);
    setSelectedVideo(data.items[0]); // Default first video
  };

  return (
    <div style={styles.container}>
        <Navbar/>
      <h2>YouTube Video Streaming App</h2>

      {/* Search Bar */}
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search YouTube videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
        <button onClick={fetchVideos} style={styles.button}>
          Search
        </button>
      </div>

      {/* Main Video Player */}
      {selectedVideo && (
        <div style={styles.videoPlayer}>
          <iframe
            width="600"
            height="350"
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            title="YouTube Video Player"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}

      {/* Video List */}
      <div style={styles.videoList}>
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            onClick={() => setSelectedVideo(video)}
            style={styles.videoItem}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt="Video Thumbnail"
              width="150"
              style={{ cursor: "pointer" }}
            />
            <p>{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styling
const styles = {
  container: { textAlign: "center", padding: "20px" },
  searchBar: { marginBottom: "20px" },
  input: { padding: "10px", fontSize: "16px", width: "300px" },
  button: { padding: "10px", marginLeft: "10px", cursor: "pointer" },
  videoPlayer: { marginBottom: "20px" },
  videoList: { display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" },
  videoItem: { cursor: "pointer", textAlign: "center" },
};

export default YouTubeVideoApp;
