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
              isDark ? "toogle-dark scale-100" : "toogle-light scale-75"
            }`}
          />

          <div
            className={`h-3 w-2.5 -mx-2 transition-colors duration-300 ${
              !isDark ? "bg-white" : "bg-[#303030]"
            }`}
          />

          <div
            className={`h-8 w-8  rounded-full transition-all duration-300 ${
              !isDark ? "toogle-light-1 scale-100" : "toogle-dark scale-75"
            }`}
          />
        </div>

        <span
          className={`absolute inline-flex h-6 w-6 transform items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out ${
            isDark
              ? "translate-x-9 toogle-dark-1"
              : "translate-x-1 toogle-light"
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
