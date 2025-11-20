import React from 'react'
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: "🔧 Landing Page design - 500$",
      description: `
      What's Included:
      ✅ 1-page responsive design (desktop 1440px + mobile 375px)
      ✅ Up to 7 sections (Hero, About, Products/Services, Social Proof, Contact, Footer, etc.)
      ✅ You will get a PDF where I explain in detail about my design decision.
      ✅ Copy guidance & headline optimization
      ✅ Figma file delivered (editable, organized)
      ✅ All assets exported (images, etc.)
      ✅ 3 revision rounds included
      ✅ 7-10 day delivery`
    }
  ];

  return (
    <section id="service-cards" className="bg-[#141414] px-8 md:px-20 py-20">
      <h1 className="text-center text-5xl font-bold md:text-6xl">
        My <span className="text-[#fa0000]">Services</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mt-20">
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
