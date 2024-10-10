import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Mini Image */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/egale.png" // Ensure this path is correct based on your project structure
            alt="About Us Hero"
            className="w-48 h-48 object-cover rounded-full mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            About Us
          </h1>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Our store was born out of a desire to inject creativity and innovation into the world of fashion. Since the beginning, we've committed to blending style and comfort for the modern lifestyle, offering sophisticated and timeless pieces that suit everyone.
        </p>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          History of the Brand
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto text-center">
          Our journey began with the goal of revolutionizing the fashion industry, bringing high-quality, functional apparel to customers around the world. Over the years, we've grown into a brand known for our passion for both innovation and timeless style.
        </p>
      </section>

      {/* Promise Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Our Promise
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto text-center">
          We are committed to pushing the boundaries of design and quality, ensuring that every piece we offer reflects our dedication to excellence. Our promise to you is simple: to provide fashion that merges creativity, comfort, and sustainability.
        </p>
      </section>




    </div>
  );
};

export default About;
