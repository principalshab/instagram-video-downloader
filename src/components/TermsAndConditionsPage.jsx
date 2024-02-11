import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TermsAndConditionsPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const languageChanged = () => {
      // Force a re-render when the language changes
      window.location.reload();
    };

    // Listen for language changes
    i18n.on('languageChanged', languageChanged);

    // Cleanup function
    return () => {
      i18n.off('languageChanged', languageChanged);
    };
  }, [i18n]);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">{t('termsAndConditions.title')}</h1>
        {t('termsAndConditions.sections', { returnObjects: true }).map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
