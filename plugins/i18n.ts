import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(() => {
  createI18n({
    legacy: false,
    inheritLocale: false,
    globalInjection: true,
    localeDir: 'locales',
    fallbackLocale: 'en',
    locale: 'en',
  })
})
