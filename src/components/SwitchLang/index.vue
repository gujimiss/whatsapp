<template>
  <div class="language-switcher" :class="{ initiali: position }">
    <van-popover placement="left-start" v-model:show="showPopover" :actions="languageOptions">
      <div class="van-popover__content van-popover__content--vertical">
        <div class="van-popover__action" v-for="item in languageOptions" @click="onSelect(item)">
          <div class="van-popover__action-text van-hairline--bottom" :class="{ active: item.value === locale }">{{ item.text }}</div>
        </div>
      </div>
      <template #reference>
        <van-icon size="8vw" name="setting-o" />
      </template>
    </van-popover>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
import { useExample } from './js/index.ts'
const { locale, showPopover, languageOptions, onSelect } = useExample(i18n)
const props = defineProps({
  position: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 99;
}
.initiali {
  position: initial;
  display: inline;
  top: 0;
  right: 0;
}
.active {
  color: #07c160;
}
</style>
