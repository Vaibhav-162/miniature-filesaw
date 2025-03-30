import { Moon, Sun } from "lucide-react";
import { HeaderProps } from "../../types/layout";

const Header = ({ isDarkMode, onThemeToggle }: HeaderProps) => {
  return (
    <div className="max-w mx-auto px-3 py-2 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
        TinyFile
      </h1>
      <button
        onClick={onThemeToggle}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>
    </div>
  );
};

export { Header }; 