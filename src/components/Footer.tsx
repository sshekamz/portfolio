import { Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">© 2024 Shashank Shekhar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Terminal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-gray-600 dark:text-gray-400">Made with ❤️ using React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}