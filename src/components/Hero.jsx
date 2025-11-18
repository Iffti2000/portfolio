import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="w-full min-h-screen bg-[#141414] flex flex-col justify-center pt-32 md:pt-40"
    >
      <div className="flex flex-col md:flex-row items-center justify-around gap-12 px-6 md:px-40 text-center md:text-left">
        <div className="">
          <p className="text-lg mb-8 text-gray-300">Hi, I'm Iffti Rahman</p>
         <h1 className="text-5xl md:text-6xl mb-10 font-bold leading-tight relative inline-block">
            Your Go To <span className="relative inline-block">
              <span className="relative inline-block"> <span className="relative z-10">Online</span> <span className="absolute inset-0 w-40 h-40 bg-red-500 rounded-full blur-3xl opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></span> </span>

            </span> 
            <br />
            <span className="text-[#fa0000]">Product Designer</span>
          </h1>
          <p className="text-gray-300 mb-8">
           Creating designs and visuals that adds value to your business and help your <br /> business thrive. Work with me to get conversion-focused designs that will grow <br /> your business bigger than its today.  
          </p>
                <button
        onClick={(e) => {
          e.preventDefault();
          if (window.Calendly) {
            window.Calendly.initPopupWidget({
              url: 'https://calendly.com/iffti2000',
            });
          } else {
            console.error("Calendly script not loaded yet");
          }
        }}
        className="rounded-full text-sm px-8 py-3 font-medium cursor-pointer border-2 border-red-500 text-white 
        shadow-[0_0_15px_rgba(248,55,55,0.3)] hover:shadow-[0_0_25px_rgba(248,55,55,0.5)] transition-all"
      >
        Schedule a Call
      </button>

        </div>
        <img 
          src={assets.my_img}
          alt="Iffti Rahman" 
          className="w-60 md:w-80"
        />
      </div>
    </section>
  );
};

export default Hero;