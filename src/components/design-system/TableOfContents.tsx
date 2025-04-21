import React from 'react';
import { ArrowRight } from 'lucide-react';

const TableOfContents: React.FC = () => {
  return (
    <div className="mb-16 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-heading font-semibold mb-4">Table of Contents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="#typography" className="flex items-center p-3 rounded-lg hover:bg-lavender/10 transition-colors">
          <span className="mr-2">01.</span>
          <span className="font-medium">Typography</span>
          <ArrowRight className="ml-auto h-4 w-4" />
        </a>
        <a href="#colors" className="flex items-center p-3 rounded-lg hover:bg-lavender/10 transition-colors">
          <span className="mr-2">02.</span>
          <span className="font-medium">Colors & Gradients</span>
          <ArrowRight className="ml-auto h-4 w-4" />
        </a>
        <a href="#buttons" className="flex items-center p-3 rounded-lg hover:bg-lavender/10 transition-colors">
          <span className="mr-2">03.</span>
          <span className="font-medium">Buttons</span>
          <ArrowRight className="ml-auto h-4 w-4" />
        </a>
        <a href="#cards" className="flex items-center p-3 rounded-lg hover:bg-lavender/10 transition-colors">
          <span className="mr-2">04.</span>
          <span className="font-medium">Cards & Containers</span>
          <ArrowRight className="ml-auto h-4 w-4" />
        </a>
        <a href="#dividers" className="flex items-center p-3 rounded-lg hover:bg-lavender/10 transition-colors">
          <span className="mr-2">05.</span>
          <span className="font-medium">Section Dividers</span>
          <ArrowRight className="ml-auto h-4 w-4" />
        </a>
        <a href="#animations" className="flex items-center p-3 rounded-lg hover:bg-lavender/10 transition-colors">
          <span className="mr-2">06.</span>
          <span className="font-medium">Animations & Transitions</span>
          <ArrowRight className="ml-auto h-4 w-4" />
        </a>
        <a href="#layouts-home" className="flex items-center p-3 rounded-lg hover:bg-lavender/10 transition-colors">
          <span className="mr-2">07.</span>
          <span className="font-medium">Home Page Layouts</span>
          <ArrowRight className="ml-auto h-4 w-4" />
        </a>
        <a href="#layouts-about" className="flex items-center p-3 rounded-lg hover:bg-lavender/10 transition-colors">
          <span className="mr-2">08.</span>
          <span className="font-medium">About Page Layouts</span>
          <ArrowRight className="ml-auto h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default TableOfContents;
