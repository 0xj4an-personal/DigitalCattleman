import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const finalLocale = locale || 'en';
  
  try {
    const messages = (await import(`../messages/${finalLocale}.json`)).default;
    return {
      locale: finalLocale,
      messages
    };
  } catch (error) {
    console.error('Error loading messages for locale:', finalLocale, error);
    // Fallback to English if the locale fails to load
    const fallbackMessages = (await import(`../messages/en.json`)).default;
    return {
      locale: 'en',
      messages: fallbackMessages
    };
  }
});