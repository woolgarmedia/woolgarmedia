import { Handshake, Eye, Heart, Zap } from "lucide-react";
import SEO from "./SEO";
import FadeInSection from "./FadeInSection";

const About = () => {
  return (
    <>
      <SEO
        title="About"
        description="About Woolgar Media, your digital marketing partner for web development, social media marketing, and content creation."
        url="https://woolgarmedia.com/about"
      />

      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Story
              </h1>
              <p className="text-gray-400 text-lg">
                We transform ideas into impactful solutions.
              </p>
            </div>
          </FadeInSection>

          {/* Founder Section */}
          <FadeInSection delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Meet the Founder
                </h2>
                <p className="text-gray-400 mb-6">
                  With over 8 years of experience in web development, I founded Woolgar Media to help small businesses in Oxfordshire establish a strong online presence.
                </p>
                <p className="text-gray-400">
                  Our mission is to provide professional, affordable web development services that help local businesses grow and succeed in the digital world.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 opacity-10 rounded-xl" />
                <img
                  src="/images/IMG-20231201-WA0013.jpg"
                  alt="Founder of Woolgar Media"
                  className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </FadeInSection>

          {/* Values Section */}
          <FadeInSection delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Handshake size={40} className="text-blue-500" />,
                  title: "Trust",
                  description: "Building long-term relationships based on trust and reliability.",
                },
                {
                  icon: <Eye size={40} className="text-blue-500" />,
                  title: "Vision",
                  description: "Helping businesses achieve their digital goals with clear vision.",
                },
                {
                  icon: <Heart size={40} className="text-blue-500" />,
                  title: "Passion",
                  description: "Dedicated to delivering exceptional results with passion.",
                },
                {
                  icon: <Zap size={40} className="text-blue-500" />,
                  title: "Innovation",
                  description: "Staying ahead with the latest web technologies and trends.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default About;
