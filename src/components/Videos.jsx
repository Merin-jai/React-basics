import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

const VideoStreamingApp = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch videos from API (Using Pexels API for free videos)
  useEffect(() => {
    const fetchVideos = async () => {
      const API_KEY = "jPWF8LiRG8IECbW6J9qbV4Ft4gptzBfFPVvHSya3kmnRU7eZqAPk9RFt"; // Get from https://www.pexels.com/api/
      const response = await fetch("https://api.pexels.com/videos/popular", {
        headers: { Authorization: API_KEY },
      });

      const data = await response.json();
      setVideos(data.videos.slice(0, 5)); // Limit to 5 videos
      setSelectedVideo(data.videos[0]); // Set first video as default
    };

    fetchVideos();
  }, []);

  return (
    <div style={styles.container}>
        <Navbar/>
      <h2>Videos</h2>

      {/* Main Video Player */}
      {selectedVideo && (
        <div style={styles.videoPlayer}>
          <video
            controls
            width="600"
            src={selectedVideo.video_files[0].link}
          />
        </div>
      )}

      {/* Video List */}
      <div style={styles.videoList}>
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            style={styles.videoItem}
          >
            <img
              src={video.image}
              alt="Video Thumbnail"
              width="150"
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Basic Styles
const styles = {
  container: { textAlign: "center", padding: "20px" },
  videoPlayer: { marginBottom: "20px" },
  videoList: { display: "flex", justifyContent: "center", gap: "10px" },
  videoItem: { cursor: "pointer" },
};

export default VideoStreamingApp;
