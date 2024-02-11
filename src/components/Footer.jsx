import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  

  return (
    <footer className="text-white py-6" 
    style={{
      backgroundImage:
        "linear-gradient(54.09deg, #0348dd 2.03%, #8142f5 48.63%, #ee4dd4 96.22%)",
    }}>
      <div className="container mx-auto px-4">
        
        {/* Logo and Description */}
        <div className="text-center md:text-left mb-6">
          <h3 className="text-2xl font-semibold mb-2">SaveInsta</h3>
          <p className="text-sm">{t('footer.description')}</p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between items-center mb-6">
          <ul className="flex space-x-4 font-semibold">
            <li><Link to="/" className="text-white hover:text-white transition">{t('footer.home')}</Link></li>
            {/* <li><Link to="/page-details" className="text-white hover:text-white transition">{t('footer.about')}</Link></li> */}
            <li><Link to="/terms-and-conditions" className="text-white hover:text-white transition">{t('footer.termsCondition')}</Link></li>
          </ul>

          {/* Copyright Section */}
          <div className="text-xs text-gray-300">&copy; {new Date().getFullYear()} SaveInsta. {t('footer.allRightsReserved')}</div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
