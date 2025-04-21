import React, { useState, useMemo } from 'react';

export interface ConfigOption {
  value: string;
  label: string;
  description: string;
  render: () => React.ReactNode;
}

interface ConfigurableComponentShowcaseProps {
  title: string;
  id: string;
  description: string;
  configOptions: ConfigOption[];
}

const ConfigurableComponentShowcase: React.FC<ConfigurableComponentShowcaseProps> = ({
  title,
  id,
  description,
  configOptions
}) => {
  const [selectedConfig, setSelectedConfig] = useState(configOptions[0]?.value || '');
  
  // Get current configuration
  const currentConfig = useMemo(() => {
    return configOptions.find(opt => opt.value === selectedConfig) || configOptions[0];
  }, [selectedConfig, configOptions]);
  
  return (
    <div className="component-showcase mb-10" id={id}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-heading font-semibold component-name">{title}</h3>
      </div>
      <div className="component-id">{id}</div>
      <p className="mb-6 text-cosmic/70 component-description">{description}</p>
      
      {/* Configuration Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-cosmic/70 mb-3">Design Pattern Configuration:</label>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {configOptions.map(option => (
            <label key={option.value} className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="configOption"
                value={option.value}
                checked={selectedConfig === option.value}
                onChange={() => setSelectedConfig(option.value)}
                className="sr-only"
              />
              <span className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedConfig === option.value
                  ? 'bg-lavender text-white'
                  : 'bg-lavender/10 text-cosmic hover:bg-lavender/20'
              }`}>
                {option.label}
              </span>
            </label>
          ))}
        </div>
        
        {/* Configuration description */}
        <p className="mt-2 text-sm text-cosmic/60 italic">
          {currentConfig?.description || ''}
        </p>
      </div>
      
      {/* Component Display */}
      <div className="example-display">
        {currentConfig?.render()}
      </div>
    </div>
  );
};

export default ConfigurableComponentShowcase;
