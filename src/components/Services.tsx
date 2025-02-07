import React from 'react';
import { Globe, Search, Share2, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Globe size={40} className="text-blue-500" />,
    title: 'Professional Website Design',
    description: 'Custom-built, SEO-optimized websites that drive results for Oxfordshire businesses.',
  },
  {
    icon: <Search size={40} className="text-blue-500" />,
    title: 'Affordable SEO Services',
    description: 'Data-driven SEO strategies to improve your search rankings and online visibility.',
  },
  {
    icon: <Share2 size={40} className="text-blue-500" />,
    title: 'Social Media Marketing',
    description: 'Engaging social media campaigns that connect with your target audience and drive growth.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Affordable digital marketing solutions and SEO services designed to help small businesses in Oxfordshire thrive online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                         transform hover:scale-105 hover:bg-gray-800/80 
                         transition-all duration-300 ease-out group"
            >
              <div className="mb-6 transform group-hover:-rotate-6 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="gradient-button text-white px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;