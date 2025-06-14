import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          // 添加pinia类型提示
          from: 'pinia',
          imports: ['StoreDefinition', 'DefineStore']
        }
      ],
      dts: 'src/auto-imports.d.ts', // 生成类型声明文件
      dirs: [ // 自动导入的目录
        'src/stores/modules/**/*.ts',
      ],
      eslintrc: {
        enabled: true // 生成eslint配置
      }
    }),
    Components({
      dts: 'src/components.d.ts', // 组件类型声明文件
    }),
    VueI18nPlugin({
      include: [path.resolve(__dirname, 'src/locales/**')],
      strictMessage: true, // 严格模式检查
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})