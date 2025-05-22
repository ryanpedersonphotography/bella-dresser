import React from 'react';
import { StoryBookButton } from './StoryBookButton';
import { StoryBookButtonGroup } from './StoryBookButtonGroup';

export const StoryBookButtonExample: React.FC = () => {
  const handleButtonClick = (buttonName: string) => {
    console.log(`${buttonName} button clicked`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center p-8">
      <StoryBookButtonGroup>
        <StoryBookButton onClick={() => handleButtonClick('Our Story')}>
          Our Story
        </StoryBookButton>
        
        <StoryBookButton onClick={() => handleButtonClick('Shop Collection')}>
          Shop Collection
        </StoryBookButton>
        
        <StoryBookButton onClick={() => handleButtonClick('Boutique Experience')}>
          Boutique Experience
        </StoryBookButton>
        
        <StoryBookButton onClick={() => handleButtonClick('Visit Us')}>
          Visit Us
        </StoryBookButton>
      </StoryBookButtonGroup>
    </div>
  );
};