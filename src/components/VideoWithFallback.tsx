import React, { useEffect, useState, forwardRef } from 'react';

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
  const [supportsWebM, setSupportsWebM] = useState(true);
  
  useEffect(() => {
    // Check WebM support instead of browser detection
    const checkWebMSupport = () => {
      const video = document.createElement('video');
      const canPlayWebM = video.canPlayType('video/webm; codecs="vp9"') !== '' || 
                         video.canPlayType('video/webm; codecs="vp8"') !== '';
      
      // Also check for Safari specifically as a fallback
      const ua = navigator.userAgent;
      const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
      
      console.log('Video format detection:', { 
        canPlayWebM, 
        isSafari, 
        userAgent: ua,
        willUseWebM: canPlayWebM && !isSafari 
      });
      
      setSupportsWebM(canPlayWebM && !isSafari);
    };
    
    checkWebMSupport();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      {...props}
    >
      {supportsWebM && webmSrc && (
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