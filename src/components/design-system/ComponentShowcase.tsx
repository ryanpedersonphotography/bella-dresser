import React from 'react';
import { useDesignSystem } from '../../contexts/DesignSystemContext';

interface ComponentShowcaseProps {
  title: string;
  id: string;
  description: string;
  children: React.ReactNode;
  unstyledChildren?: React.ReactNode;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ 
  title, 
  id, 
  description, 
  children, 
  unstyledChildren 
}) => {
  const { isStyled } = useDesignSystem();
  
  return (
    <div className="component-showcase mb-10" id={id}>
      <div className="mb-4">
        <h3 className="text-2xl font-heading font-semibold component-name">{title}</h3>
      </div>
      <div className="component-id">{id}</div>
      <p className="mb-6 text-cosmic/70 component-description">{description}</p>
      <div className={isStyled ? "styled-view" : "unstyled-view"}>
        <div className="example-display">
          {isStyled ? children : (unstyledChildren || children)}
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
