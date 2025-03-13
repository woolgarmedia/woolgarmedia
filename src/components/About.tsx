import { Handshake, Eye, Heart, Zap } from "lucide-react";
import SEO from "./SEO";

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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Story
            </h1>
            <p className="text-gray-400 text-lg">
              We transform ideas into impactful solutions.
            </p>
          </div>

          {/* Founder Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/images/IMG-20231201-WA0013.jpg"
                  alt="Team collaboration"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Founded with Purpose
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  At Woolgar Media, we believe in the transformative power of
                  technology to solve complex business challenges and drive
                  innovation.
                </p>
                <p>
                  We also understand the struggle for small businesses to
                  navigate the digital landscape. That's why we're committed to
                  providing expert guidance and support to help you succeed. We
                  bring together expertise in development, design, and marketing
                  to provide you with the best results.
                </p>
                <p>
                  Our mission is to delivere excellence in every project,
                  combine technical expertise with creative innovation, and to
                  create solutions that make a real difference to your business.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Handshake size={40} className="text-blue-500" />,
                  title: "Ethics",
                  description:
                    "We conduct business with unwavering integrity and transparency",
                },
                {
                  icon: <Eye size={40} className="text-blue-500" />,
                  title: "Vision",
                  description:
                    "We look beyond todays challenges to create tomorrows solutions",
                },
                {
                  icon: <Heart size={40} className="text-blue-500" />,
                  title: "Passion",
                  description:
                    "Were driven by our love for technology and problem-solving",
                },
                {
                  icon: <Zap size={40} className="text-blue-500" />,
                  title: "Impact",
                  description:
                    "We measure success by the real difference we make in peoples lives",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50
                         transform hover:scale-105 transition-all duration-300 group">
                  <div className="mb-4 transform group-hover:-rotate-6 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Section */}
          {/* <div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Software Development",
                items: ["Custom Solutions", "Web Applications", "Mobile Apps"],
              },
              {
                title: "Industry Focus",
                items: ["E-commerce", "Healthcare", "Finance"],
              },
              {
                title: "Technical Excellence",
                items: ["Quality Assurance", "Best Practices", "Security"],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> */}
        </div>
      </section>
    </>
  );
};

export default About;
