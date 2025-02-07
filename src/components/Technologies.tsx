import React from 'react';
import { Code2, Blocks, FileCode, Boxes, Cloud, Container } from 'lucide-react';

const technologies = [
  {
    icon: <Code2 size={40} className="text-green-500" />,
    name: 'C#',
    description: 'Modern object-oriented programming'
  },
  {
    icon: <Blocks size={40} className="text-blue-600" />,
    name: 'ASP.NET',
    description: 'Powerful web framework'
  },
  {
    icon: <Blocks size={40} className="text-purple-600" />,
    name: 'ASP.NET Core',
    description: 'Cross-platform framework'
  },
  {
    icon: <FileCode size={40} className="text-blue-400" />,
    name: 'React.js',
    description: 'Dynamic user interfaces'
  },
  {
    icon: <FileCode size={40} className="text-gray-300" />,
    name: 'Next.js',
    description: 'React framework for production'
  },
  {
    icon: <FileCode size={40} className="text-green-400" />,
    name: 'Vue.js',
    description: 'Progressive JavaScript framework'
  },
  {
    icon: <FileCode size={40} className="text-green-500" />,
    name: 'Nuxt.js',
    description: 'Vue framework for production'
  },
  {
    icon: <Boxes size={40} className="text-blue-500" />,
    name: 'TypeScript',
    description: 'Typed JavaScript development'
  },
  {
    icon: <Boxes size={40} className="text-green-600" />,
    name: 'Node.js',
    description: 'JavaScript runtime environment'
  },
  {
    icon: <Cloud size={40} className="text-orange-500" />,
    name: 'AWS',
    description: 'Cloud computing services'
  },
  {
    icon: <Cloud size={40} className="text-blue-500" />,
    name: 'Azure',
    description: 'Microsoft cloud platform'
  },
  {
    icon: <Container size={40} className="text-blue-400" />,
    name: 'Docker',
    description: 'Container platform'
  }
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technologies We <span className="gradient-text">Use</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our expertise spans across modern technologies and frameworks to deliver cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm 
                         border border-gray-700/30 transform hover:scale-105 
                         hover:bg-gray-800/50 transition-all duration-300 ease-out group"
            >
              <div className="mb-4 transform group-hover:-rotate-6 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-400 text-center">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;