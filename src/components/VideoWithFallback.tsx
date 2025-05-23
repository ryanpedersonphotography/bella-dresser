import React, { forwardRef } from 'react';
import { useSafariDetection } from '../hooks/useSafariDetection';

interface VideoWithFallbackProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  webmSrc?: string;
  fallbackSrc?: string;
  poster?: string;
  className?: string;
}

const VideoWithFallback = forwardRef<HTMLVideoElement, VideoWithFallbackProps>(({ 
  webmSrc, 
  fallbackSrc, 
  poster, 
  className = '', 
  ...props 
}, ref) => {
  const isSafari = useSafariDetection();
  
  // Don't render until we know the browser
  if (isSafari === null) {
    return null;
  }
  
  // For Safari, ONLY render MOV/MP4 source
  if (isSafari && fallbackSrc) {
    return (
      <video
        ref={ref}
        className={className}
        poster={poster}
        {...props}
      >
        <source 
          src={fallbackSrc} 
          type={fallbackSrc.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} 
        />
        Your browser does not support the video tag.
      </video>
    );
  }

  // For all other browsers, render both sources with WebM first
  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      {...props}
    >
      {webmSrc && (
        <source src={webmSrc} type="video/webm" />
      )}
      {fallbackSrc && (
        <source 
          src={fallbackSrc} 
          type={fallbackSrc.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} 
        />
      )}
      Your browser does not support the video tag.
    </video>
  );
});

VideoWithFallback.displayName = 'VideoWithFallback';

export default VideoWithFallback;