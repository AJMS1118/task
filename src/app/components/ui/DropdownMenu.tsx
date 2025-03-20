import React, { useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";
import { ChevronDown, Cuboid } from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  label: string;
  items: MenuItem[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="flex items-center font-medium text-gray-800 dark:text-gray-200  cursor-pointer">
        <Cuboid
          size={18}
          className={`${isDark ? "text-orange-500" : "text-black"} mr-1`}
        />
        {label}
        <ChevronDown
          size={14}
          className={`ml-1 ${
            isDark ? "text-orange-500" : "text-black"
          }  transition-transform ${isHovered ? "rotate-180" : ""}`}
        />
      </span>

      {isHovered && (
        <div className="absolute mt-3 left-5 w-48 bg-white dark:bg-[#222222]/90 rounded-3xl shadow-lg z-50">
          <div className="absolute top-0 right-20 -mt-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800 z-20"></div>
          <div className="absolute top-0 right-20 -mt-2.5 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-200 dark:border-b-gray-700 z-10"></div>

          <ul role="menu" className="py-1">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href="/"
                  className="block px-4 py-1.5 text-sm text-gray-700 dark:text-gray-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
