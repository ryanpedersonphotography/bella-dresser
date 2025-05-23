import { useEffect, useState } from 'react';

export const useSafariDetection = () => {
  const [isSafari, setIsSafari] = useState<boolean | null>(null);
  
  useEffect(() => {
    const detectSafari = () => {
      // Check if we're in a browser environment
      if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        setIsSafari(false);
        return;
      }
      
      const ua = navigator.userAgent;
      const vendor = navigator.vendor || '';
      
      // Method 1: Check user agent
      const hasSafariInUA = ua.indexOf('Safari') > -1;
      const hasChromeInUA = ua.indexOf('Chrome') > -1;
      const hasChromiumInUA = ua.indexOf('Chromium') > -1;
      const hasCriOSInUA = ua.indexOf('CriOS') > -1;
      
      // Method 2: Check vendor
      const isAppleVendor = vendor.indexOf('Apple') > -1;
      
      // Method 3: Check for Safari-specific features
      const hasSafariObject = window.hasOwnProperty('safari');
      const hasSafariPushNotification = 'safari' in window && 'pushNotification' in (window as any).safari;
      
      // Determine if it's Safari
      const isSafariBrowser = hasSafariInUA && 
                             !hasChromeInUA && 
                             !hasChromiumInUA && 
                             !hasCriOSInUA && 
                             (isAppleVendor || hasSafariObject || hasSafariPushNotification);
      
      console.log('Safari Detection Hook:', {
        userAgent: ua,
        vendor: vendor,
        hasSafariInUA,
        hasChromeInUA,
        isAppleVendor,
        hasSafariObject,
        hasSafariPushNotification,
        result: isSafariBrowser
      });
      
      setIsSafari(isSafariBrowser);
    };
    
    detectSafari();
  }, []);
  
  return isSafari;
};