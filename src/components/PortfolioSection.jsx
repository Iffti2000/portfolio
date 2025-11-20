import React from "react";
import { assets } from '../assets/assets';

export default function PortfolioSection() {
  return (
     <div className="w-full min-h-screen bg-[#141414] text-white flex flex-col items-center px-4 py-10">

{/* Top Images */}

      <h1 className="text-4xl font-bold text-center mb-10" style={{ color: '#fa0000' }}>
        Portfolio
      </h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <img src={assets.portfolio_img_3} alt="Portfolio 1" className="rounded-xl w-full" />
        <img src={assets.portfolio_img_4} alt="Portfolio 2" className="rounded-xl w-full" />
      </div>

      {/* Case Study Section */}
      <div className="max-w-3xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-2">Coffee Shop Landing Page</h2>
        <p className="italic mb-6">Case Study.</p>
        <p className="text-gray-300 leading-relaxed mb-6">
          BEANS — Modern Coffee Landing Page Overview. This landing page was made taking inspiration from other
          successful coffee shop websites that how they decorated their sites.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Why I made this landing page: While creating both landing pages, I focused on making a strong first impression. This design aims to instantly communicate modern brand identity. Clear CTAs are strategically placed to make ordering effortless, while high-quality imagery and descriptive content reinforce brand authenticity and build trust with customers.
        </p>
      </div>

      {/* Solution Section */}
      <div className="max-w-3xl text-left mb-12">
        <h3 className="text-xl font-semibold mb-4">Solution:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <p>Designed a conversion-optimized landing page featuring:</p>
          <li>Hero section with compelling value proposition</li>
          <li>Product showcase with clear pricing and CTAs</li>
          <li>Social proof through customer testimonials</li>
          <li>Email capture incentive (15% off)</li>
          <li>Comprehensive footer with essential information</li>
        </ul>
      </div>

    {/* Screenshot Row */}
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-center">
    <img src={assets.screenshot9} alt="s9" className="rounded-xl w-full" />
    <img src={assets.screenshot10} alt="s10" className="rounded-xl w-full" />
    <img src={assets.screenshot11} alt="s11" className="rounded-xl w-full" />
    <img src={assets.screenshot12} alt="s12" className="rounded-xl w-full" />
    </div>

      {/* Click Here Section */}
      <p className="text-center text-gray-400 italic mb-12"><a href="https://www.figma.com/proto/p4Fv3bugkoTPCFYWw5m68K/Coffee-Shop-Website?page-id=0%3A1&node-id=3-2&viewport=268%2C373%2C0.56&t=tkVKZxbgO75Iu3Xw-1&scaling=min-zoom&content-scaling=fixed" target="/">Monitor View (Click Here)</a></p>

      {/* Design Decisions */}
      <div className="max-w-3xl text-left mb-12">
        <h3 className="text-xl font-semibold mb-4">Design Decisions:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>✓ Strategic use of high-quality food photography</li>
          <li>✓ Clear product categorization (Hot / Cold / Cup Coffee / Desserts)</li>
          <li>✓ Multiple conversion points throughout the page</li>
          <li>✓ Brown/cream color palette matching the coffee theme</li>
          <li>✓ Trust-building elements (testimonials, star ratings)</li>
        </ul>
      </div>

      {/* Mobile Screenshots */}
      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
        <img src={assets.screenshot13} alt="s13" className="rounded-lg" />
        <img src={assets.screenshot14} alt="s14" className="rounded-lg" />
        <img src={assets.screenshot15} alt="s15" className="rounded-lg" />
        <img src={assets.screenshot16} alt="s16" className="rounded-lg" />
      </div>

      <p className="text-center text-gray-400 italic"><a href="https://www.figma.com/proto/p4Fv3bugkoTPCFYWw5m68K/Coffee-Shop-Website?page-id=0%3A1&node-id=48-2&viewport=268%2C373%2C0.56&t=z6eLUqykNjvVojDs-1&scaling=min-zoom&content-scaling=fixed" target="/">Mobile View (Click Here)</a></p>


      {/* Title */}

      {/* Top Images */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <img src={assets.portfolio_img_1} alt="Portfolio 1" className="rounded-xl w-full" />
        <img src={assets.portfolio_img_2} alt="Portfolio 2" className="rounded-xl w-full" />
      </div>

      {/* Case Study Section */}
      <div className="max-w-3xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-2">The Furniture Landing Page</h2>
        <p className="italic mb-6">Case Study.</p>
        <p className="text-gray-300 leading-relaxed mb-6">
          DECORATE — Modern Furniture E-Commerce Project Overview. This landing page was made taking inspiration from other
          successful furniture shop websites that how they decorated their sites.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Why I made this landing page: I wanted to create a landing page that builds a premium perception among customers. Most
          retail furniture shops still don't have a proper website. This design is intended for those businesses, especially showroom
          owners — helping them establish trust and leave an outstanding first impression with a modern digital presence.
        </p>
      </div>

      {/* Solution Section */}
      <div className="max-w-3xl text-left mb-12">
        <h3 className="text-xl font-semibold mb-4">Solution:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <p> Designed a comprehensive e-commerce landing page featuring:</p>
          <li>Hero section with emotional headline and featured product</li>
          <li>Strategic product showcases (trending, featured, full catalog)</li>
          <li>Social proof (30,000 global users)</li>
          <li>Urgency elements (sale countdown)</li>
          <li>Content marketing (blog section)</li>
          <li>Intuitive category navigation</li>
        </ul>
      </div>

    {/* Screenshot Row */}
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-center">
    <img src={assets.screenshot1} alt="s1" className="rounded-xl w-full" />
    <img src={assets.screenshot2} alt="s2" className="rounded-xl w-full" />
    <img src={assets.screenshot3} alt="s3" className="rounded-xl w-full" />
    <img src={assets.screenshot4} alt="s4" className="rounded-xl w-full" />
    </div>

      {/* Click Here Section */}
      <p className="text-center text-gray-400 italic mb-12"><a href="https://www.figma.com/proto/PW6kc702X52ZRzj6bbDvkp/Furniture-landing-page?page-id=0%3A1&node-id=54-393&viewport=1856%2C1074%2C0.63&t=ho1sqH5bHWXKvl4L-1&scaling=min-zoom&content-scaling=fixed" target="/">Monitor View (Click Here)</a></p>

      {/* Design Decisions */}
      <div className="max-w-3xl text-left mb-12">
        <h3 className="text-xl font-semibold mb-4">Design Decisions:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Orange accent color for CTAs (energetic, inviting)</li>
          <li>Dark teal for trust and sophistication</li>
          <li>Less decorative whitespace for a premium feel</li>
          <li>Lifestyle images in desk section for relatability</li>
          <li>Curved decorative elements for personality</li>
        </ul>
      </div>

      {/* Mobile Screenshots */}
      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
        <img src={assets.screenshot5} alt="s5" className="rounded-lg" />
        <img src={assets.screenshot6} alt="s6" className="rounded-lg" />
        <img src={assets.screenshot7} alt="s7" className="rounded-lg" />
        <img src={assets.screenshot8} alt="s8" className="rounded-lg" />
      </div>

      <p className="text-center text-gray-400 italic mb-20"><a href="https://www.figma.com/proto/PW6kc702X52ZRzj6bbDvkp/Furniture-landing-page?page-id=0%3A1&node-id=98-3&viewport=1049%2C886%2C0.48&t=WSQHilgHOHUD2aqI-1&scaling=min-zoom&content-scaling=fixed">Mobile View (Click Here)</a></p>


    </div>
  );
}

