import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { readMarkdownFile } from "../utils/markdownUtils";
import { useEffect, useState } from "react";
import { readdirSync } from "fs";
import { join } from "path";

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
}

const stories: Story[] = [
  {
    id: "smart-furniture-iot",
    category: "Green Technology",
    title: "Smart Furniture IoT Integration Case Study",
    description:
      "How we empowered a leading technology company to streamline products and leverage green energy",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    stats: [
      { label: "10+", value: "10+", description: "Years Experience" },
      { label: "24/7", value: "24/7", description: "Support & Service" },
      { label: "Global", value: "Global", description: "Solution Reach" },
      { label: "Trusted", value: "Trusted", description: "Industry Partner" },
    ],
    technologies: [
      { name: "React", icon: "react" },
      { name: ".NET", icon: "dotnet" },
      { name: ".NET Core", icon: "dotnetcore" },
      { name: "API", icon: "api" },
      { name: "Azure", icon: "azure" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    id: "restaurant-booking",
    category: "Digital Transformation",
    title: "Revolutionizing Multi-Brand Restaurant Booking Experience",
    description:
      "How we transformed the digital booking experience for a leading UK hospitality group, revolutionizing customer engagement across multiple brands",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    stats: [
      { label: "20+", value: "20+", description: "Restaurant Brands" },
      { label: "UK Wide", value: "UK Wide", description: "Coverage" },
      {
        label: "Enterprise",
        value: "Enterprise",
        description: "Scale Solution",
      },
      { label: "Seamless", value: "Seamless", description: "Integration" },
    ],
    technologies: [
      { name: "Vue", icon: "vue" },
      { name: "Nuxt", icon: "nuxt" },
      { name: "JAVA", icon: "java" },
      { name: ".NET", icon: "dotnet" },
      { name: ".NET Core", icon: "dotnetcore" },
      { name: "API", icon: "api" },
      { name: "Azure", icon: "azure" },
      { name: "SQL", icon: "sql" },
    ],
  },
];

const SuccessStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  useEffect(() => {
    const fetchStories = async () => {
      const storyFiles = ["/src/blog/dvs-new-website.md"]; // Add more markdown files as needed
      const storyPromises = storyFiles.map(async (file) => {
        const story = await readMarkdownFile(file);
        return story;
      });
      const stories = await Promise.all(storyPromises);
      setStories(stories);
    };

    fetchStories();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories
          </h1>
          <p className="text-gray-400 text-lg">
            Transforming ideas into impactful solutions
          </p>
        </div>

        <div className="space-y-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50
                         transform hover:scale-[1.02] transition-all duration-300 ease-out">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5">
                  <div className="relative h-64 lg:h-full">
                    <div className="absolute inset-0 bg-blue-500/10" />
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                        {story.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-3/5 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {story.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{story.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {story.stats.map((stat, index) => (
                      <div key={index}>
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

                  <Link
                    to={`/success-stories/${story.id}`}
                    className="inline-flex items-center gap-2 gradient-button text-white px-6 py-3 
                             rounded-full text-sm font-medium shadow-lg">
                    READ CASE STUDY
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
