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
  const [isSafari, setIsSafari] = useState(false);
  
  useEffect(() => {
    // Simple Safari detection - runs immediately
    const ua = window.navigator.userAgent;
    const safari = /safari/i.test(ua) && !/chrome/i.test(ua);
    
    console.log('Safari detection:', { 
      userAgent: ua,
      isSafari: safari
    });
    
    setIsSafari(safari);
  }, []);

  // For Safari, put MOV first. For others, put WebM first.
  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      {...props}
    >
      {isSafari ? (
        <>
          {fallbackSrc && (
            <source 
              src={fallbackSrc} 
              type={fallbackSrc.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} 
            />
          )}
          {webmSrc && (
            <source src={webmSrc} type="video/webm" />
          )}
        </>
      ) : (
        <>
          {webmSrc && (
            <source src={webmSrc} type="video/webm" />
          )}
          {fallbackSrc && (
            <source 
              src={fallbackSrc} 
              type={fallbackSrc.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} 
            />
          )}
        </>
      )}
      Your browser does not support the video tag.
    </video>
  );
});

VideoWithFallback.displayName = 'VideoWithFallback';

export default VideoWithFallback;