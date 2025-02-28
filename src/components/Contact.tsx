import { Mail, Briefcase } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
          <Mail className="w-8 h-8" />
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:shashanknkework@gmail.com"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://drive.google.com/file/d/1m3o-Ro8PRhsxpdVvxL9kSUx731Ubkadm/view?usp=sharing"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}