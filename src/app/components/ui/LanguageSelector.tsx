import React, { useState, useEffect, useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flagCode: string;
}

interface LanguageSelectorProps {
  onSelectLanguage: (language: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onSelectLanguage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    code: "En",
    name: "English",
    flagCode: "Gb",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: "En", name: "English", flagCode: "Gb" },
    { code: "De", name: "Deutsch", flagCode: "De" },
    { code: "Pl", name: "Polish", flagCode: "Pl" },
    { code: "Pt", name: "Portugues", flagCode: "Pt" },
    { code: "Ru", name: "Русский", flagCode: "Ru" },
    { code: "Es", name: "Español", flagCode: "Es" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    onSelectLanguage(language);
    setIsOpen(false);
  };

  const renderFlag = (flagCode: string) => (
    <ReactCountryFlag
      countryCode={flagCode}
      svg
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
      }}
    />
  );

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 mr-[-0.5rem] z-10 border border-gray-200 dark:border-gray-600 overflow-hidden">
          {renderFlag(selectedLanguage.flagCode)}
        </div>

        <button
          className="flex items-center gap-1 rounded-r-md border-gray-200  pl-3 pr-2 py-1 bg-gray-200 dark:bg-[#1e1e1e] dark:text-gray-200"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="font-medium text-xs">{selectedLanguage.code}</span>
          <ChevronDown
            size={14}
            className={`text-orange-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-white dark:bg-[#222222]   rounded-2xl shadow-lg z-50 overflow-hidden w-full min-w-[180px]">
          {languages.map((language, index) => (
            <div
              key={language.code}
              onClick={() => handleSelectLanguage(language)}
              className={`
                flex items-center px-4 py-2 cursor-pointer w-full
                hover:bg-gray-100 dark:hover:bg-[#303030]/90
                transition-colors duration-150
                ${index === 0 ? "rounded-t-lg" : ""} 
                ${index === languages.length - 1 ? "rounded-b-lg" : ""}
              `}
            >
              <div className="flex items-center w-full">
                <span className="mr-2">{renderFlag(language.flagCode)}</span>
                <span>{language.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Nota: Para usar banderas con colores, se recomienda instalar:
// npm install react-country-flag
// Y luego importar y usar ReactCountryFlag como:
// import ReactCountryFlag from "react-country-flag";
//
// <ReactCountryFlag
//   countryCode={flagCode}
//   svg
//   style={{
//     width: '24px',
//     height: '24px',
//     borderRadius: '50%',
//   }}
// />
