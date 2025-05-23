export const detectBrowser = () => {
  const ua = navigator.userAgent.toLowerCase();
  
  return {
    isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    isChrome: ua.includes('chrome') && !ua.includes('edg'),
    isFirefox: ua.includes('firefox'),
    isEdge: ua.includes('edg'),
    supportsWebM: () => {
      const video = document.createElement('video');
      return video.canPlayType('video/webm; codecs="vp9"') === 'probably' ||
             video.canPlayType('video/webm; codecs="vp8"') === 'probably';
    }
  };
};