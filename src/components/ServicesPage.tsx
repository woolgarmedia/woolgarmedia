import React from "react";
import { Globe, Search, Share2, BarChart3, ArrowRight } from "lucide-react";
import SEO from "./SEO";
import { Link, useNavigate } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const services = [
  {
    icon: <Globe size={40} className="text-blue-500" />,
    title: "Professional Website Design & Development",
    description:
      "Custom-built, modern websites that help Oxfordshire businesses establish a strong online presence.",
    features: [
      "Responsive Web Design",
      "E-commerce Solutions",
      "Content Management Systems",
      "Performance Optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2426&q=80",
  },
  {
    icon: <Share2 size={40} className="text-blue-500" />,
    title: "Website Maintenance & Support",
    description:
      "Ongoing support and maintenance to keep your website running smoothly and securely.",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Performance Optimization",
      "Technical Support",
    ],
    image:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    // Use setTimeout to ensure the navigation completes before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <SEO
        title="Services"
        description="Professional web development services in Oxfordshire, specializing in custom website design, e-commerce solutions, and ongoing support for small businesses."
        url="https://woolgarmedia.com/services"
      />
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <FadeInSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Professional <span className="gradient-text">Web Development</span> Services
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Custom website development solutions tailored for small businesses in Oxfordshire
              </p>
            </div>
          </FadeInSection>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={200 * (index + 1)}>
                <div
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                  <div className="lg:w-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-blue-500 opacity-10 rounded-xl group-hover:opacity-20 transition-opacity duration-300" />
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-xl shadow-2xl w-full h-[300px] object-cover"
                      />
                    </div>
                  </div>

                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4">
                      {service.icon}
                    </div>

                    <h2 className="text-3xl font-bold text-white">
                      {service.title}
                    </h2>

                    <p className="text-gray-400 text-lg">{service.description}</p>

                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* CTA Section */}
          <FadeInSection delay={800}>
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Build Your Online Presence?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Get started with our professional web development services today
              </p>
              <Link
                to="/#contact"
                onClick={scrollToContact}
                className="gradient-button text-white px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
              >
                Get Your Free Website Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
