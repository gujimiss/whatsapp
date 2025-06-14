/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@/*' {
  // 根据实际情况调整类型
  const value: any
  export default value
}

declare module 'vue-i18n' {
  export * from 'vue-i18n/dist/vue-i18n.d.ts'
  // 添加 Composition API 扩展
  export interface Composer {
    install?: never
    mode?: never
    locale: Ref<string>
  }
}
declare module '@/stores/modules/*' {
  import type { DefineStore } from 'pinia'
  const store: DefineStore
  export default store
}

declare module '@/hooks/i18nText' {
  export function useI18nText(key: string, ...args: any[]): any;
}

declare module '*.svg' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
  export const ReactComponent: string
}

declare module '*.svg?url' {
  const content: string
  export default content
}

declare module '*.svg?component' {
  const content: DefineComponent
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}
