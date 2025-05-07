import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 bg-gray-900 relative overflow-hidden">
      {/* Background dots/pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full" />
        <div className="absolute top-40 right-20 w-4 h-4 bg-blue-500 rounded-full" />
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-blue-500 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-500 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-6">
              🚀 Professional Web Development in Oxfordshire
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              Expert Website Design &{" "}
              <span className="gradient-text">Development</span>
              <br />
              for Small Businesses
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              Transform your small business with our professional website development services. Based in Oxfordshire, we create custom, modern websites that help local businesses establish a strong online presence.
            </p>

            <button className="gradient-button text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 shadow-lg">
              Get Your Free Website Consultation
              <ArrowRight size={20} />
            </button>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              <div>
                <div className="text-blue-500 text-3xl font-bold">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-blue-500 text-3xl font-bold">#1</div>
                <div className="text-gray-400 text-sm">
                  Trust Web Development Agency Oxfordshire
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <img
              src="/images/IMG-20231201-WA0004.jpg"
              alt="Digital Marketing and SEO Services in Oxfordshire"
              className="rounded-lg shadow-2xl w-full object-cover transform -rotate-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
