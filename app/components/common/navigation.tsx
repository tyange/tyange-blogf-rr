import { Menu, Search, Sun, Moon } from "lucide-react";

export default function Navigation() {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <button className="rounded-md p-2 text-gray-600 dark:text-gray-300">
              <Menu size={24} />
            </button>
            <div className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
              tyange-dev-blog
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="rounded-md p-2 text-gray-600 dark:text-gray-300">
              <Search size={24} />
            </button>
            <button className="rounded-md p-2 text-gray-600 dark:text-gray-300">
              <Sun size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
