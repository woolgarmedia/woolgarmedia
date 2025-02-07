import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const StoryDetail = () => {
  const { id } = useParams();

  // In a real application, you would fetch the story details based on the ID
  // For now, we'll show a sample layout

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Back to Success Stories
          </button>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 p-8">
          <div className="max-w-4xl mx-auto">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
              Case Study
            </span>
            
            <h1 className="text-4xl font-bold text-white mt-6 mb-4">
              Smart Furniture IoT Integration Case Study
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 text-lg mb-8">
                How we empowered a leading technology company to streamline products and leverage green energy
              </p>

              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Case Study Hero"
                className="w-full rounded-xl mb-8"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-900/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">The Challenge</h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">The Solution</h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">The Result</h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-400 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Technical Implementation</h2>
              <p className="text-gray-400 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Results & Impact</h2>
              <p className="text-gray-400 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;