import React from 'react';
import VideoWithFallback from '../components/VideoWithFallback';

const VideoExample: React.FC = () => {
  return (
    <div className="video-container">
      <VideoWithFallback
        webmSrc="/videos/transparent-animation.webm"
        fallbackSrc="/videos/transparent-animation-hevc.mov" // or .mp4 with HEVC
        poster="/images/video-poster.jpg"
        className="hero-video"
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default VideoExample;