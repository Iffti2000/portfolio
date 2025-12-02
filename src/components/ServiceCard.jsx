import React from 'react'

const ServiceCard = ({ title, description }) => {

  const handleCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/iffti2000',
      });
    } else {
      console.error("Calendly script not loaded yet");
    }
  };

  return (
    <div className="
      w-full md:w-[45%] p-8 rounded-3xl
      bg-[#1f1e1e]/60 backdrop-blur-md
      border border-red-500/40
      shadow-[0_0_20px_rgba(255,0,0,0.2)]
      transition-all duration-300
      hover:border-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]
      hover:scale-[1.02]
    ">
      <h2 className="text-white mb-4 text-2xl font-semibold">
        {title}
      </h2>
      
      <p className="text-gray-300 whitespace-pre-line leading-7 text-[15px]">
        {description}
      </p>

      {/* CLICKABLE CTA */}
      <p
        onClick={handleCalendly}
        className="mt-6 text-[#fa0000] font-semibold cursor-pointer hover:underline transition"
      >
        👉 Start My Project
      </p>
    </div>
  )
}

export default ServiceCard;

