<template>
  <div class="information-page">
    <!-- 搜索栏 -->
    <van-sticky>
      <HeaderSearch @search="onSearch"></HeaderSearch>
      <van-tabs v-model:active="activeTab" @change="changeTab">
        <van-tab :title="$t('news')" name="news"></van-tab>
        <van-tab :title="$t('notice')" name="notice"></van-tab>
        <van-tab :title="$t('faq')" name="faq"></van-tab>
      </van-tabs>
    </van-sticky>

    <div class="card-list">
      <van-card v-for="item in currentList" :key="item.id" :title="item.title" class="info-card" price="2.00" :desc="item.time">
        <template #price>
          <span class="category"><van-icon name="notes-o" />平台公告</span>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExample } from './js/information';
import HeaderSearch from '@/components/HeaderSearch/index.vue';
const { activeTab, currentList, changeTab, onSearch } = useExample();
</script>

<style lang="scss" scoped>
.information-page {
  background: #f7f8fa;
  min-height: 100vh;
  box-sizing: border-box;
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 12px;
  text-align: left;
}

.info-card {
  --van-card-padding: 12px;
  background-color: #fff;
  border-radius: 8px;
}

.info-card :deep(.van-card__title) {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}
.info-card :deep(.van-card__content) {
  min-height: initial;
}

.category {
  color: #52c41a;
  :deep(.van-icon) {
    margin-right: 5px;
  }
}

.time {
  color: #888;
}
</style>
