import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  'en-US': {
    translation: {
      welcome: 'Welcome to React + i18next + Mantine',
      description: 'This is a simple React application with internationalization support',
      counter: 'Counter',
      count: 'Count is {{count}}',
      increment: 'Increment',
      decrement: 'Decrement',
      reset: 'Reset',
      selectLanguage: 'Select Language',
      currentLanguage: 'Current Language',
      features: 'Features',
      feature1: 'Multi-language support (English & Thai)',
      feature2: 'Modern UI with Mantine components',
      feature3: 'i18next for internationalization',
      feature4: 'TypeScript support',
    },
  },
  'th-TH': {
    translation: {
      welcome: 'ยินดีต้อนรับสู่ React + i18next + Mantine',
      description: 'นี่คือแอปพลิเคชัน React แบบง่ายที่รองรับหลายภาษา',
      counter: 'ตัวนับ',
      count: 'จำนวน {{count}}',
      increment: 'เพิ่ม',
      decrement: 'ลด',
      reset: 'รีเซ็ต',
      selectLanguage: 'เลือกภาษา',
      currentLanguage: 'ภาษาปัจจุบัน',
      features: 'คุณสมบัติ',
      feature1: 'รองรับหลายภาษา (อังกฤษและไทย)',
      feature2: 'UI ที่ทันสมัยด้วย Mantine',
      feature3: 'i18next สำหรับการจัดการหลายภาษา',
      feature4: 'รองรับ TypeScript',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en-US',
    supportedLngs: ['en-US', 'th-TH'],
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
