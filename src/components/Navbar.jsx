import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem("selectedLanguage") || "en";

  });

  const { i18n } = useTranslation();



  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "ar", name: "Arabic" },
    { code: "hi", name: "Hindi" },
    { code: "zh", name: "Chinese (Simplified)" },
    { code: "tr", name: "Turkish" },
    { code: "nl", name: "Dutch" }
  ];
  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    i18n.changeLanguage(languageCode);
    setMobileMenuOpen(false);
    // window.location.reload();
  };

  const renderLanguageOptions = () => {
    return languages.map((language) => (
      <option key={language.code} value={language.code}>
      {language.name}
      </option>
    ));
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(54.09deg, #0348dd 2.03%, #8142f5 48.63%, #ee4dd4 96.22%)",
            }}
          >
            SaveInsta
          </a>
        </div>

        <div className="md:hidden">
          <button
            className="text-black"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>

        {/* Language Selector (Visible on Medium Screens and Above) */}
        <div className="hidden md:flex items-center space-x-4 text-black">
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
          >
            {renderLanguageOptions()}
          </select>
        </div>
      </div>

      {/* Mobile Menu (Visible on Small Screens) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-200">
          {/* Language Selector Dropdown Menu */}
          <select
            className="block w-full text-left p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            {renderLanguageOptions()}
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
