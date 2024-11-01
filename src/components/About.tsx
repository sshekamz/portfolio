import {
  User,
  Blocks as ReactIcon,
  FileCode2 as TypeScriptIcon,
  Server as NodeIcon,
  FileCode2 as JavaScriptIcon,
  Cloud as AWSIcon,
  Container as DockerIcon,
  Database as MongoDBIcon,
  TableProperties as PostgreSQLIcon
} from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  delay: string;
}

export function About() {
  const techStack: TechItem[] = [
    { name: 'React', icon: <ReactIcon className="w-4 h-4" />, delay: '0s' },
    { name: 'JavaScript', icon: <JavaScriptIcon className="w-4 h-4" />, delay: '0s' },
    { name: 'TypeScript', icon: <TypeScriptIcon className="w-4 h-4" />, delay: '0.1s' },
    { name: 'Node.js', icon: <NodeIcon className="w-4 h-4" />, delay: '0.2s' },
    { name: 'AWS', icon: <AWSIcon className="w-4 h-4" />, delay: '0.4s' },
    { name: 'Docker', icon: <DockerIcon className="w-4 h-4" />, delay: '0.5s' },
    { name: 'MongoDB', icon: <MongoDBIcon className="w-4 h-4" />, delay: '0.6s' },
    { name: 'PostgreSQL', icon: <PostgreSQLIcon className="w-4 h-4" />, delay: '0.7s' }
  ];

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
          <User className="w-8 h-8" />
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate software developer with 3+ years of experience building web applications.
              I specialize in React, Node.js, TyepeScript, cloud technologies like AWS, and MongoDB, Postgres Databases with a recent focus on AI integration.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me contributing to open-source projects, writing technical
              blog posts, or exploring new technologies.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm animate-float"
                  style={{
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: tech.delay
                  }}
                >
                  {tech.icon}
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}