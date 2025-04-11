import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl font-script mb-6">Meet Aneta</h1>
          <p className="text-gray-700 mb-6">
            Born and raised in Poland, Aneta brought her European sense of style and fashion expertise to the heart of Minnesota. 
            Her journey from Warsaw to Pequot Lakes is a story of passion, determination, and the pursuit of making women feel beautiful.
          </p>
          <p className="text-gray-700 mb-6">
            With over 15 years of experience in fashion retail, Aneta carefully curates each piece in the store, 
            bringing together the best of European elegance and Minnesota charm.
          </p>
          <blockquote className="border-l-4 border-pink-500 pl-4 italic text-gray-600">
            "Fashion is not just about clothes, it's about feeling confident and beautiful in your own skin."
            <footer className="mt-2 text-sm">- Aneta</footer>
          </blockquote>
        </div>
        <div className="relative h-[600px]">
          <img 
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3" 
            alt="Boutique owner"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;