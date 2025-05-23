import React, { forwardRef } from 'react';

interface VideoWithFallbackProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  webmSrc?: string;
  fallbackSrc?: string;
  poster?: string;
  className?: string;
}

// Detect Safari immediately on module load
const isSafari = (() => {
  if (typeof window === 'undefined') return false;
  
  const ua = window.navigator.userAgent;
  const vendor = window.navigator.vendor || '';
  
  // Multiple Safari detection methods
  const isSafariUA = /safari/i.test(ua) && !/chrome|chromium|crios/i.test(ua);
  const isAppleVendor = /apple/i.test(vendor);
  const isSafariObject = typeof window.safari !== 'undefined';
  
  const result = isSafariUA || (isAppleVendor && isSafariObject);
  
  console.log('Safari detection (immediate):', { 
    userAgent: ua,
    vendor: vendor,
    isSafariUA,
    isAppleVendor,
    isSafariObject,
    finalResult: result
  });
  
  return result;
})();

const VideoWithFallback = forwardRef<HTMLVideoElement, VideoWithFallbackProps>(({ 
  webmSrc, 
  fallbackSrc, 
  poster, 
  className = '', 
  ...props 
}, ref) => {
  // For Safari, only show MOV source. For others, only show WebM source.
  if (isSafari) {
    return (
      <video
        ref={ref}
        className={className}
        poster={poster}
        {...props}
      >
        {fallbackSrc && (
          <source 
            src={fallbackSrc} 
            type={fallbackSrc.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} 
          />
        )}
        Your browser does not support the video tag.
      </video>
    );
  }

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