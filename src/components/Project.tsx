import { Code2, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export function Projects() {
  const projects: Project[] = [
    {
        title: "Chat Application",
        description: "Real-time chat app with some featires of Telegram and WhatsApp",
        tech: ["React.js", "JavaScript", "MongoDb", "Socket.io", "NodeJs"],
        link: "https://chat-app-frontend-sable.vercel.app/"
      },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Redux"],
      link: "https://ecoshop-orpin.vercel.app/"
    },
    {
      title: "Blockchain Explorer",
      description: "Cryptocurrency blockchain explorer with real-time updates",
      tech: ["React", "Web3.js", "GraphQL", "Tailwind"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
          <Code2 className="w-8 h-8" />
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center justify-between">
                  {project.title}
                  <a href={project.link} className="text-blue-500 hover:text-blue-600">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}