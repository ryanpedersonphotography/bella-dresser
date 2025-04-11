import React from 'react';
import HeroSlideshow from '../components/HeroSlideshow';

const Home = () => {
  return (
    <div className="relative">
      <HeroSlideshow />

      {/* Featured Collection with Fabric Texture */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528459801416-a9241982fc8d?ixlib=rb-4.0.3')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-4xl font-script text-center mb-12">Latest Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3"
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img src={image} alt="Fashion item" className="w-full h-96 object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">Summer Collection</p>
                    <p className="text-sm">Shop Now →</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagonal Section with Pink Texture */}
      <section className="relative py-32 -skew-y-3 bg-pink-50 mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553532434-5ab5b6b84993?ixlib=rb-4.0.3')] opacity-20 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 skew-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-script mb-6">European Elegance Meets Minnesota Charm</h2>
              <p className="text-gray-700 mb-6">
                Experience our carefully curated collection of unique pieces that blend sophisticated European style with comfortable 
                lakeside living. Each item is selected to make you feel confident and beautiful.
              </p>
              <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors">
                View Collections
              </button>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3"
                alt="Boutique interior"
                className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Wool Texture Section */}
      <section className="relative py-32 mt-20 bg-pink-400">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?ixlib=rb-4.0.3')] opacity-20 bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/80 to-pink-500/80"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-300 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-600 rounded-full opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3"
                alt="Boutique collection"
                className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2 text-white">
              <h2 className="text-4xl font-script mb-6">Small Town Boutique, Big City Style</h2>
              <p className="mb-6">
                Discover our handpicked selection of contemporary fashion that brings the latest trends to Pequot Lakes. 
                From casual lakeside wear to elegant evening attire, we offer styles that perfectly blend sophistication with comfort.
              </p>
              <button className="bg-white text-pink-500 px-8 py-3 rounded-full hover:bg-pink-100 transition-colors">
                Explore Store
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wavy Section with Texture */}
      <section className="relative py-24 mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-script mb-6">Our Boutique Experience</h2>
            <p className="text-gray-700">
              Step into a world where fashion meets personal attention. Our boutique offers a curated shopping experience 
              with personalized styling advice and unique pieces you won't find anywhere else.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Styling",
                description: "One-on-one attention to help you find the perfect pieces for your style and occasion."
              },
              {
                title: "Unique Selection",
                description: "Carefully curated collection featuring both European and local designers."
              },
              {
                title: "Lakeside Fashion",
                description: "Styles that transition seamlessly from beach to evening events."
              }
            ].map((item, index) => (
              <div key={index} className="relative p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-50 to-transparent opacity-50 rounded-xl"></div>
                <div className="relative">
                  <h3 className="text-2xl font-script mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section with Texture */}
      <section className="relative py-20 bg-gray-900 mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550945771-515f118cef86?ixlib=rb-4.0.3')] opacity-10 mix-blend-soft-light"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-script mb-6 text-white">Join Our Fashion Family</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to receive updates on new arrivals, special promotions, and styling tips.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;