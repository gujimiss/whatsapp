import { ref, onMounted } from 'vue'
import type { Composer } from 'vue-i18n'

export function useExample(i18n: Composer) {
  const { locale } = i18n as { locale: Ref<string> }

  onMounted(() => {
    console.log('Mounted!')
  })

  // 语言选项
  const showPopover = ref(false)
  const languageOptions = [
    { text: '中文', value: 'zh' },
    { text: 'English', value: 'en' },
  ]
  const onSelect = (action: any) => {
    locale.value = action.value
    showPopover.value = false
  }

  return { locale: locale as Ref<string>, showPopover, languageOptions, onSelect }
}
