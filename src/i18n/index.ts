import en from './en.json';
import el from './el.json';

export type Locale = 'en' | 'el';

const translations: Record<Locale, Record<string, any>> = { en, el };

export function t(locale: Locale, path: string): string {
  const keys = path.split('.');
  let value: any = translations[locale];
  for (const key of keys) {
    if (value == null) return path;
    value = value[key];
  }
  return typeof value === 'string' ? value : path;
}
