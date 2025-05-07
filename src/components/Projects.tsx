import SEO from "./SEO";
import FadeInSection from "./FadeInSection";

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0"></div>
      </div>
      <div className="p-8">
        <span className="inline-block rounded-full bg-blue-500 px-4 py-1 text-sm font-medium text-white">
          {project.category}
        </span>
        <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-gray-300">{project.description}</p>
      </div>
    </div>
  );
};

const projectsData: Project[] = [
  {
    id: "1",
    category: "Web Development",
    title: "Diesel Vehicle Services",
    description:
      "Designed and developed a professional website for Diesel Vehicle Services, a local mechanics business, to enhance their online presence and make it easy for customers to get in touch and book.",
    image: "/images/dvs-1.png",
  },
  {
    id: "2",
    category: "Web Development",
    title: "L&M Diamond Cutting Services",
    description:
      "Built a sleek and responsive website for L&M Diamond Cutting Services, helping them attract new clients with clear service offerings and an easy-to-use contact form.",
    image: "/images/lmdcs-project.png",
  },
  {
    id: "3",
    category: "Web Development",
    title: "Jackson's Paintings",
    description:
      "Developed a professional website for Jackson’s Paintings, a painter and decorator specializing in internal and external projects, making it easy for customers to view previous projects and request quotes.",
    image: "/images/jacksons-paintings-project.png",
  },
];

const Projects = () => {
  return (
    <>
      <SEO
        title="Projects"
        description="Projects from Woolgar Media, your digital marketing partner for web development, social media marketing, and content creation."
        url="https://woolgarmedia.com/projects"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h1 className="mb-12 text-center text-4xl font-bold text-white">
              Our Projects
            </h1>
          </FadeInSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => (
              <FadeInSection key={project.id} delay={200 * (index + 1)}>
                <ProjectCard project={project} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
