import React from 'react';

/**
 * PinkDottedPath Component
 * Creates a path of animated pink dots that guide the user's eye between sections
 */
const PinkDottedPath: React.FC = () => {
  // Create an array of dots with different animation delays
  const dots = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    delay: `${index * 0.5}s`
  }));

  return (
    <div className="pink-dotted-path">
      {dots.map(dot => (
        <div 
          key={dot.id}
          className="pink-dot"
          style={{ animationDelay: dot.delay }}
        />
      ))}
    </div>
  );
};

export default PinkDottedPath;