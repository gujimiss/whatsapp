import { createI18n } from 'vue-i18n'
import { Locale } from 'vant'
import en from './locales/en.json'
import zh from './locales/zh.json'

import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'

const i18n = createI18n({
  legacy: false,
  locale: 'zh', // 设置默认语言
  fallbackLocale: 'en', // 设置备用语言
  messages: {
    en: { ...enUS, ...en },
    zh: { ...zhCN, ...zh },
  },
});

  // 监听语言切换，同步 Vant 语言
(i18n.global as any).onBeforeLanguageChange = (lang: string) => {
  Locale.use(lang, i18n.global.getLocaleMessage(lang))
}

export default i18n
