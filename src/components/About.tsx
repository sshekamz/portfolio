import { User } from 'lucide-react';

export function About() {
  const techStack = ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'];

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
                <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}