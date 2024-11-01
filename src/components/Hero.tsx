import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://github.com/sshekamz/portfolio/blob/main/src/assets/ProfilePic.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full object-center mb-8 ring-4 ring-blue-500 dark:ring-blue-400"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Shashank Shekhar
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer & AI Enthusiast
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/sshekamz" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a href="https://linkedin.com/in/shashanknke" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a href="mailto:shashanknkework@gmail.com" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
