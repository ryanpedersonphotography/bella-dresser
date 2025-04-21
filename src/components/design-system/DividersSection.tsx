import React from 'react';
import ConfigurableComponentShowcase, { ConfigOption } from './ConfigurableComponentShowcase';
import DirectionalDiagonalDivider from '../DirectionalDiagonalDivider';
import PinkBlobContainer from '../PinkBlobContainer';
import PinkDiagonalDivider from '../PinkDiagonalDivider';
import PinkConfettiDivider from '../PinkConfettiDivider';
import PinkDottedPath from '../PinkDottedPath';
import PinkWaveDivider from '../PinkWaveDivider';

const configOptions: ConfigOption[] = [
  {
    value: 'directional-diagonal',
    label: 'Directional Diagonal',
    description: 'Creates a diagonal transition between sections. Can be configured to point up or down.',
    render: () => (
      <div>
        <div className="relative h-32 bg-lavender/20">
          <DirectionalDiagonalDivider direction="up" variant="hero" />
        </div>
        <p className="text-sm text-cosmic/60 mt-4">DirectionalDiagonalDivider direction="up" variant="hero"</p>
        
        <div className="relative h-32 bg-lavender/20 mt-12">
          <DirectionalDiagonalDivider direction="down" variant="bottom" />
        </div>
        <p className="text-sm text-cosmic/60 mt-4">DirectionalDiagonalDivider direction="down" variant="bottom"</p>
      </div>
    )
  },
  {
    value: 'pink-blob',
    label: 'Pink Blob',
    description: 'Creates an organic, blob-shaped transition between sections.',
    render: () => (
      <div>
        <div className="relative h-32">
          <PinkBlobContainer />
        </div>
        <p className="text-sm text-cosmic/60 mt-4">PinkBlobContainer</p>
      </div>
    )
  },
  {
    value: 'pink-diagonal',
    label: 'Pink Diagonal',
    description: 'Creates a diagonal transition with a pink accent.',
    render: () => (
      <div>
        <div className="relative h-32">
          <PinkDiagonalDivider />
        </div>
        <p className="text-sm text-cosmic/60 mt-4">PinkDiagonalDivider</p>
      </div>
    )
  },
  {
    value: 'pink-confetti',
    label: 'Pink Confetti',
    description: 'Creates a playful transition with confetti-like elements.',
    render: () => (
      <div>
        <div className="relative h-32">
          <PinkConfettiDivider />
        </div>
        <p className="text-sm text-cosmic/60 mt-4">PinkConfettiDivider</p>
      </div>
    )
  },
  {
    value: 'pink-dotted',
    label: 'Pink Dotted Path',
    description: 'Creates a transition with a dotted path pattern.',
    render: () => (
      <div>
        <div className="relative h-32">
          <PinkDottedPath />
        </div>
        <p className="text-sm text-cosmic/60 mt-4">PinkDottedPath</p>
      </div>
    )
  },
  {
    value: 'pink-wave',
    label: 'Pink Wave',
    description: 'Creates a wave-like transition between sections.',
    render: () => (
      <div>
        <div className="relative h-32">
          <PinkWaveDivider />
        </div>
        <p className="text-sm text-cosmic/60 mt-4">PinkWaveDivider</p>
      </div>
    )
  }
];

const DividersSection: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <section id="dividers" className="mb-20">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-4xl font-heading font-bold">05. Section Dividers</h2>
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
            title="Section Dividers"
            id="BD-Dividers"
            description="Various configurations of section divider components."
            configOptions={configOptions}
          />
        )}
      </div>
    </section>
  );
};

export default DividersSection;
