import React from 'react';

interface StoryBookButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const StoryBookButton: React.FC<StoryBookButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        storybook-button
        bg-[#fcf4e6] 
        border-2 
        border-[#cfb68e] 
        rounded-xl 
        px-8 
        py-3 
        text-[22px] 
        font-semibold 
        text-[#3c2f2f] 
        text-center 
        shadow-[0_4px_8px_rgba(0,0,0,0.05)]
        transition-all 
        duration-200 
        ease-in-out
        hover:bg-[#f1e1c9] 
        hover:-translate-y-0.5
        hover:shadow-[0_6px_12px_rgba(0,0,0,0.08)]
        active:translate-y-0
        active:shadow-[0_2px_4px_rgba(0,0,0,0.1)]
        disabled:opacity-50 
        disabled:cursor-not-allowed
        disabled:hover:translate-y-0
        disabled:hover:bg-[#fcf4e6]
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#cfb68e] 
        focus:ring-offset-2
        w-full
        ${className}
      `}
      style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontWeight: 600,
        letterSpacing: 'normal',
      }}
    >
      {children}
    </button>
  );
};