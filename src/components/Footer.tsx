import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-script mb-4">Bella Dresser</h3>
            <p className="text-gray-400">Your destination for unique fashion in Pequot Lakes, Minnesota.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> 123 Main Street, Pequot Lakes, MN</p>
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> (218) 555-0123</p>
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> hello@belladresser.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;