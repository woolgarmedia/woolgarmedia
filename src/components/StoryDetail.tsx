// filepath: /home/woolgar/code-wsl/woolgarmedia/src/components/StoryDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { readMarkdownFile } from "../utils/markdownUtils";

interface Story {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  technologies: {
    name: string;
    icon: string;
  }[];
  content: string;
}

const StoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const story = await readMarkdownFile(`/src/blog/${id}.md`);
        setStory(story);
      } catch (error) {
        console.error("Error fetching story:", error);
      }
    };

    fetchStory();
  }, [id]);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200">
            <ArrowLeft size={20} />
            Back to Success Stories
          </button>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 p-8">
          <div className="max-w-4xl mx-auto">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
              {story.category}
            </span>

            <h1 className="text-4xl font-bold text-white mt-6 mb-4">
              {story.title}
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 text-lg mb-8">{story.description}</p>

              <img
                src={story.image}
                alt={story.title}
                className="w-full rounded-xl mb-8"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {story.stats.map((stat, index) => (
                  <div key={index} className="bg-gray-900/50 p-6 rounded-lg">
                    <div className="text-blue-500 text-xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {story.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-sm">
                    {tech.name}
                  </span>
                ))}
              </div>

              <div dangerouslySetInnerHTML={{ __html: story.content }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
