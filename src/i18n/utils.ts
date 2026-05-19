import en from './en.json';
import ru from './ru.json';

type Locale = 'en' | 'ru';
type TranslationKey = keyof typeof en;

const translations: Record<Locale, typeof en> = { en, ru };

export function useTranslations(locale: string | undefined) {
  const lang = (locale ?? 'en') as Locale;
  return function t(key: TranslationKey): string {
    return translations[lang]?.[key] ?? translations['en'][key] ?? key;
  };
}

export function getLocalePath(locale: string | undefined, path: string): string {
  if (!locale || locale === 'en') return path;
  return `/ru${path === '/' ? '' : path}`;
}
