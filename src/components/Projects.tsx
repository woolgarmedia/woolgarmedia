interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

const projectsData: Project[] = [
  {
    id: "1",
    category: "Web Development",
    title: "Diesel Vehicle Services",
    description: "",
    image: "/images/dvs-1.png",
  },
  {
    id: "2",
    category: "Web Development",
    title: "L&M Diamond Cutting Services",
    description: "",
    image: "/images/lmdcs-project.png",
  },
  {
    id: "3",
    category: "Web Development",
    title: "Jackson's Paintings",
    description: "",
    image: "/images/jacksons-paintings-project.png",
  },
];

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

const Projects = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">
          My Projects
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
