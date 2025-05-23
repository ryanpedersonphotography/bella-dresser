import React, { forwardRef } from 'react';
import { isSafari, isIOS } from 'react-device-detect';

interface VideoWithFallbackProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  webmSrc?: string;
  fallbackSrc?: string;
  poster?: string;
  className?: string;
}

const VideoWithFallbackAlt = forwardRef<HTMLVideoElement, VideoWithFallbackProps>(({ 
  webmSrc, 
  fallbackSrc, 
  poster, 
  className = '', 
  ...props 
}, ref) => {
  // Use react-device-detect for reliable Safari detection
  const useFallback = isSafari || isIOS;
  
  console.log('VideoWithFallbackAlt - Browser Detection:', {
    isSafari,
    isIOS,
    useFallback,
    userAgent: navigator.userAgent
  });
  
  // For Safari/iOS, ONLY render MOV/MP4 source
  if (useFallback && fallbackSrc) {
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

VideoWithFallbackAlt.displayName = 'VideoWithFallbackAlt';

export default VideoWithFallbackAlt;