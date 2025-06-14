
import type { LocaleMessages } from 'vue-i18n'
export function useI18nText(key: string, args: LocaleMessages<unknown>): string {
  // 通过 getCurrentInstance 获取 i18n 实例
  const instance = getCurrentInstance()
  if (!instance) {
    throw new Error('useI18nHook must be called within a setup function')
  }
  const { $t } = instance.appContext.config.globalProperties
  return $t(key, args)
}