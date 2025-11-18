import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

  return (
    <section id="footer" className="bg-black px-8 md:px-20 pt-16 pb-8">
      <div className="flex flex-col md:flex-row justify-between flex-wrap text-white gap-8">
        <div className="social-links">
          <h3 className="text-xl font-semibold mb-2">Iffti Rahman</h3>
          <p className="text-gray-400 mb-4">Your go-to online fullstack developer</p>
          <div className="flex gap-4 text-2xl">
           <a href='https://www.facebook.com/sadbinrahman.ifty' target='/'>
            <FaFacebook/>
           </a> 
           <a href="https://www.instagram.com/iamifftirahman/" target='/'>
            <FaInstagram />
           </a>
            <a href="https://www.linkedin.com/in/sadbinrahmaniffti/" target='/'>
              <FaLinkedin />
            </a>
            
          </div>
        </div>
        <div className="footer-email">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <a 
            href="mailto:contact@ifftirahman.com"
            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
          >
            contact@ifftirahman.com
          </a>
        </div>
      </div>
      <div className="h-px bg-gray-700 my-10"></div>
      <p className="text-center text-sm text-gray-600">
        © 2025 Iffti Rahman. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;