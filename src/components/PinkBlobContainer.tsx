import React from 'react';

/**
 * PinkBlobContainer Component
 * Creates organic, animated blob shapes that float between sections
 */
const PinkBlobContainer: React.FC = () => {
  return (
    <div className="pink-blob-container">
      <div className="pink-blob pink-blob-1"></div>
      <div className="pink-blob pink-blob-2"></div>
      <div className="pink-blob pink-blob-3"></div>
    </div>
  );
};

export default PinkBlobContainer;