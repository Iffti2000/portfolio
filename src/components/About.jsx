import React from 'react'
import { assets } from '../assets/assets';

const About = () => {
  return (
    <section 
      id="about" 
      className="bg-[#141414] px-6 md:px-20 pt-20 pb-28"
    >
      <h1 className="text-center font-bold text-4xl md:text-6xl mb-16">
        About <span className="text-[#fa0000]">Me</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 flex-wrap text-center md:text-left">
        <img 
          src={assets.my_img_about}
          alt="About Me" 
          className="w-36 md:w-50 rounded-3xl shadow-[0_0_30px_rgba(248,55,55,0.15)]"
        />
        <div className="max-w-2xl leading-7 text-gray-300 text-sm md:text-base">
          <p>
            I'm Iffti Rahman. A Product Designer based in Dhaka. My interest is in designing and want to make my career in the creative field. That's why I'm here to put my designing skills into your product. My goal is to make your website or app look good and polished so users can have a good impression of your product and good impression eventually helps in huge growth.Every design will be created with problem solving goal and a thorough discussion on zoom call about your business and goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
