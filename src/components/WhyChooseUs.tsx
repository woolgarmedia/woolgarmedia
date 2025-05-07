import React from 'react';
import { Target, Award, Users, Rocket, Shield } from 'lucide-react';
import FadeInSection from './FadeInSection';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">Woolgar Media</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your trusted partner for professional website development in Oxfordshire. We help small businesses establish a strong online presence through custom, modern websites.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Target size={40} className="text-blue-500" />,
              title: "Custom Solutions",
              description: "Tailored website development that meets your specific business needs and goals."
            },
            {
              icon: <Award size={40} className="text-blue-500" />,
              title: "Modern Technology",
              description: "Built with the latest web technologies for optimal performance and user experience."
            },
            {
              icon: <Users size={40} className="text-blue-500" />,
              title: "Dedicated Support",
              description: "Personal attention and ongoing support from our experienced development team."
            },
            {
              icon: <Rocket size={40} className="text-blue-500" />,
              title: "Fast Delivery",
              description: "Quick turnaround on website development projects without compromising quality."
            },
            {
              icon: <Shield size={40} className="text-blue-500" />,
              title: "Secure & Reliable",
              description: "Built with security in mind and backed by reliable hosting solutions."
            }
          ].map((feature, index) => (
            <FadeInSection key={index} delay={200 * (index + 1)}>
              <div
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
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;