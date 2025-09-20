import esMessages from '../messages/es.json';
import enMessages from '../messages/en.json';

const messages = {
  en: enMessages,
  es: esMessages,
};

export function getTranslation(locale: string, key: string, fallback?: string): string {
  try {
    const localeMessages = messages[locale as keyof typeof messages];
    if (!localeMessages) {
      console.warn(`Locale ${locale} not found, falling back to English`);
      return getTranslation('en', key, fallback);
    }

    const keys = key.split('.');
    let value: any = localeMessages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key ${key} not found for locale ${locale}`);
        return fallback || key;
      }
    }

    return typeof value === 'string' ? value : (fallback || key);
  } catch (error) {
    console.error(`Error getting translation for ${key} in ${locale}:`, error);
    return fallback || key;
  }
}

export function getProductsTranslations(locale: string) {
  return {
    title: getTranslation(locale, 'products.title', 'Our Cattle'),
    subtitle: getTranslation(locale, 'products.subtitle', 'Explore our exclusive collection of premium cattle from Colombia\'s finest ranches'),
  };
}
