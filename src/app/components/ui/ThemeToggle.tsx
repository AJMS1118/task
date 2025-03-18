import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="relative flex items-center">
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      >
        <span
          className={`absolute left-1 inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out ${
            isDark ? "translate-x-8" : "translate-x-0"
          }`}
        />

        <span className="absolute left-1.5 flex h-6 w-6 items-center justify-center text-gray-700 dark:text-blue-300">
          <Moon size={14} />
        </span>
        <span className="absolute right-1.5 flex h-6 w-6 items-center justify-center text-yellow-500">
          <Sun size={14} />
        </span>
      </button>
    </div>
  );
};
