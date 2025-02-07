import React from 'react';
import { Target, Award, Users, Rocket, Shield, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose <span className="gradient-text">Woolgar Media</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your trusted partner for affordable SEO services and website development in Oxfordshire. We help small businesses achieve exceptional results through data-driven digital marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Target size={40} className="text-blue-500" />,
              title: "Results-Driven Approach",
              description: "Our digital marketing strategies are focused on delivering measurable results and ROI for your small business."
            },
            {
              icon: <Award size={40} className="text-blue-500" />,
              title: "Local SEO Experts",
              description: "Specialized in helping Oxfordshire businesses improve their local search rankings and online visibility."
            },
            {
              icon: <Users size={40} className="text-blue-500" />,
              title: "Dedicated Support Team",
              description: "Personal attention and regular updates from our experienced digital marketing professionals."
            },
            {
              icon: <Rocket size={40} className="text-blue-500" />,
              title: "Affordable Solutions",
              description: "Cost-effective SEO services and website development packages tailored for small businesses."
            },
            {
              icon: <Clock size={40} className="text-blue-500" />,
              title: "Timely Delivery",
              description: "Quick turnaround on website development projects without compromising on quality."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 rounded-xl bg-gray-800/30 backdrop-blur-sm 
                         border border-gray-700/30 transform hover:scale-105 
                         hover:bg-gray-800/50 transition-all duration-300 ease-out group"
            >
              <div className="mb-6 transform group-hover:-rotate-6 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;