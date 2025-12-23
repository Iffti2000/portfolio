import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import ServicesSection from './ServicesSection';
import Footer from './Footer';
import QNA from './QNA';

const Portfolio = () => {
  return (
    <div className="font-['Poppins'] bg-gray-900 text-white">
      {/* Font Awesome CDN would be added in index.html */}
      <Navbar />
      <Hero />
      <QNA/>
      <ServicesSection />
      <About />
      <Footer />
    </div>
  );
};

export default Portfolio
