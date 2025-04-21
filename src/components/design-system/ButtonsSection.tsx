import React from 'react';
import ConfigurableComponentShowcase, { ConfigOption } from './ConfigurableComponentShowcase';
import ButtonComponent from '../ButtonComponent';
import { ArrowRight, ExternalLink } from 'lucide-react';

const configOptions: ConfigOption[] = [
  {
    value: 'primary-secondary',
    label: 'Primary & Secondary',
    description: 'Main button styles used for primary and secondary actions.',
    render: () => (
      <div className="flex flex-wrap gap-4">
        <ButtonComponent>Primary Button</ButtonComponent>
        <ButtonComponent variant="secondary">Secondary Button</ButtonComponent>
      </div>
    )
  },
  {
    value: 'sizes',
    label: 'Sizes',
    description: 'Button size variations for different contexts.',
    render: () => (
      <div className="flex flex-wrap items-center gap-4">
        <ButtonComponent size="sm">Small</ButtonComponent>
        <ButtonComponent size="md">Medium</ButtonComponent>
        <ButtonComponent size="lg">Large</ButtonComponent>
      </div>
    )
  },
  {
    value: 'with-icons',
    label: 'With Icons',
    description: 'Buttons with integrated icons for enhanced visual communication.',
    render: () => (
      <div className="flex flex-wrap gap-4">
        <ButtonComponent className="flex items-center gap-2">
          <span>With Icon</span>
          <ArrowRight className="h-4 w-4" />
        </ButtonComponent>
        <ButtonComponent variant="secondary" className="flex items-center gap-2">
          <span>External Link</span>
          <ExternalLink className="h-4 w-4" />
        </ButtonComponent>
      </div>
    )
  }
];

const ButtonsSection: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <section id="buttons" className="mb-20">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-4xl font-heading font-bold">03. Buttons</h2>
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <ConfigurableComponentShowcase
            title="Buttons"
            id="BD-Buttons"
            description="Various configurations of the Button component with sample text and icons."
            configOptions={configOptions}
          />
        )}
      </div>
    </section>
  );
};

export default ButtonsSection;
