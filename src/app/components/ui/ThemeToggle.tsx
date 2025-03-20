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
        className="relative inline-flex h-9 w-16 items-center transition-colors duration-300"
        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      >
        <div className="absolute inset-0 flex items-center justify-between">
          <div
            className={`h-8 w-8 rounded-full transition-all duration-300 ${
              isDark ? "bg-gray-800 scale-110" : "bg-white scale-75"
            }`}
          />

          <div
            className={`h-4 w-4 -mx-2 transition-colors duration-300 ${
              !isDark ? "bg-white" : "bg-gray-800"
            }`}
          />

          <div
            className={`h-8 w-8 rounded-full transition-all duration-300 ${
              !isDark ? "bg-white scale-110" : "bg-gray-800 scale-75"
            }`}
          />
        </div>

        <span
          className={`absolute inline-flex h-6 w-6 transform items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out ${
            isDark ? "translate-x-9 bg-gray-800" : "translate-x-1 bg-white"
          }`}
        />

        <span
          className={`absolute left-1.5 flex h-6 w-6 items-center justify-center transition-opacity duration-200 ${
            isDark ? "opacity-100" : "opacity-70"
          }`}
        >
          <Moon
            size={`${!isDark ? "14" : "18"}`}
            className={`${!isDark ? "text-gray-950" : "text-white"}`}
          />
        </span>
        <span
          className={`absolute right-1.5 flex h-6 w-6 items-center justify-center transition-opacity duration-200 ${
            !isDark ? "opacity-100" : "opacity-70"
          }`}
        >
          <Sun
            size={`${isDark ? "14" : "18"}`}
            className={`${!isDark ? "text-gray-950" : "text-white"}`}
          />
        </span>
      </button>
    </div>
  );
};
