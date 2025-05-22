import React from 'react';

interface StoryBookButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export const StoryBookButtonGroup: React.FC<StoryBookButtonGroupProps> = ({
  children,
  className = '',
  centered = true,
}) => {
  return (
    <div
      className={`
        storybook-button-group
        flex 
        flex-col 
        gap-3 
        w-full 
        max-w-md 
        ${centered ? 'mx-auto items-center justify-center' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};