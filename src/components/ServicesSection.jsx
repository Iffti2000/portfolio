
import React from 'react'
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
  {
    title: "🔧 Landing Page design - 400$",
      description: `
  What's Included:
  ✅ 1-page responsive design (Desktop 1440px + Mobile 375px)
  ✅ Up to 7 high-impact sections
  ✅ UX & conversion-focused layout
  ✅ Copy guidance & headline optimization
  ✅ Detailed Design-Decision PDF
  ✅ Fully editable Figma file (clean & organized)
  ✅ All assets exported (images, icons, etc.)
  ✅ 3 revision rounds included
  ✅ 7–10 business day delivery
  `
    }
  ];


  return (
    <section id="service-cards" className="bg-[#141414] px-10 md:px-20 pt-24">
      <h1 className="text-center text-5xl font-bold md:text-6xl">
        My <span className="text-[#fa0000]">Services</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection
