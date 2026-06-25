import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LANGUAGE, LANGUAGES, STORAGE_KEY, isValidLanguage } from './config'
import { translations } from './translations'

const LanguageContext = createContext(null)

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isValidLanguage(stored) ? stored : DEFAULT_LANGUAGE
  })

  const setLanguage = useCallback((code) => {
    if (!isValidLanguage(code)) return
    setLanguageState(code)
    window.localStorage.setItem(STORAGE_KEY, code)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = 'ltr'
  }, [language])

  const value = useMemo(() => {
    const copy = translations[language] ?? translations[DEFAULT_LANGUAGE]

    const t = (key, fallback = '') => {
      const result = getNestedValue(copy, key)
      return result ?? fallback
    }

    return {
      language,
      setLanguage,
      languages: LANGUAGES,
      t,
      tr: copy,
    }
  }, [language, setLanguage])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
