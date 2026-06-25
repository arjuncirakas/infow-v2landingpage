export const STORAGE_KEY = 'inflow-lang'

export const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'nl', label: 'Nederlands', short: 'NL' },
  { code: 'pt', label: 'Português', short: 'PT' },
]

export const DEFAULT_LANGUAGE = 'en'

export function isValidLanguage(code) {
  return LANGUAGES.some((lang) => lang.code === code)
}
