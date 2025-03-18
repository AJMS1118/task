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
    code: "en",
    name: "English",
    flagCode: "GB",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: "en", name: "English", flagCode: "GB" },
    { code: "de", name: "Deutsch", flagCode: "DE" },
    { code: "pl", name: "Polish", flagCode: "PL" },
    { code: "pt", name: "Portugues", flagCode: "PT" },
    { code: "ru", name: "Русский", flagCode: "RU" },
    { code: "es", name: "Español", flagCode: "ES" },
    { code: "fr", name: "Français", flagCode: "FR" },
    { code: "it", name: "Italiano", flagCode: "IT" },
    { code: "nl", name: "Nederlands", flagCode: "NL" },
    { code: "ja", name: "日本語", flagCode: "JP" },
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
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 mr-[-0.5rem] z-10 border border-gray-200 dark:border-gray-600 overflow-hidden">
          {renderFlag(selectedLanguage.flagCode)}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 rounded-r-md border-gray-200  pl-3 pr-2 py-1 bg-gray-200 dark:bg-[#1e1e1e] dark:text-gray-200"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="uppercase font-medium text-xs">
            {selectedLanguage.code}
          </span>
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
        <div className="absolute top-full right-0 mt-1 w-44 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 z-10">
          <ul
            role="listbox"
            className="py-1 max-h-60 overflow-y-auto custom-scrollbar"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(156, 163, 175, 0.5) transparent",
            }}
          >
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  onClick={() => handleSelectLanguage(language)}
                  className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200"
                >
                  <div className="flex items-center gap-3">
                    {renderFlag(language.flagCode)}
                    <span>{language.name}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
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
