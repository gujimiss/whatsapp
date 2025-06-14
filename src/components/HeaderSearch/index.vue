<template>
  <div class="header">
    <div class="back-box" @click="router.back()"><van-icon name="arrow-left" />{{ $t('back') }}</div>
    <van-search v-model="searchText" :placeholder="$t('searchPlaceholder')" shape="round" background="#ffffff" @search="onSearch" />
  </div>
</template>
<script setup lang="ts">

const emits = defineEmits(['search']);

const router = useRouter();

let searchText = ref('');
const onSearch = (value: string) => {
  emits('search', value);
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .van-search {
    flex: 1;
    padding: 0 8px;
  }

  .back-box {
    font-size: 14px;
  }
}
</style>
