import React from "react";

const services = [
  { title: "2019", description: "Year Established" },
  { title: "200+", description: "Projects Supplied" },
  { title: "85+", description: "Contractors Approached" },
  { title: "120+", description: "Engineers Approached" },
];

export default function Services() {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>

        {/* Responsive Flex Container */}
        <div className="flex  justify-center items-center bg-yellow-400 p-10 rounded-lg space-x-8">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <div className="p-6 text-center flex flex-col  w-full sm:w-1/2 md:w-1/4">
                <h2 className="text-5xl text-gray-600 font-bold mb-2">{service.title}</h2>
                <p className="text-gray-700 font-bold">{service.description}</p>
              </div>
              {index !== services.length - 1 && (
                <span className="text-3xl font-semibold text-white mx-4">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
