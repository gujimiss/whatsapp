<template>
  <!-- 底部导航 -->
  <nav class="bottom-tab">
    <van-icon name="home-o" @click="goHome" :title="$t('tabHome')" />
    <van-icon name="notes-o" @click="goArticles" :title="$t('tabArticles')" />
    <van-icon name="plus" class="tab-plus" @click="goLinkAccount" :title="$t('tabLink')" />
    <van-icon name="friends-o" @click="goInvite" :title="$t('tabInvite')" />
    <van-icon name="user-o" @click="goProfile" :title="$t('tabProfile')" />
  </nav>
</template>
<script setup lang="ts">
import { showToast } from 'vant';
// import { useI18n } from 'vue-i18n';
const router = useRouter();
// const { t } = useI18n();
const goHome = () => {
  router.push('/');
};
const goArticles = () => {
  showToast("文章列表");
  router.push("/information");
};
const goLinkAccount = () => {
  showToast("链接账号");
  router.push("/AFKAccount");
};
const goInvite = () => {
  showToast("邀请好友");
  router.push("/invite");
};
const goProfile = () => {
  showToast("个人中心");
  router.push("/user");
};
</script>
<style lang="scss" scoped>
.bottom-tab {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 56px;
  background: #fff;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.03);
  z-index: 100;

  .tab-plus {
    font-size: 32px;
    color: #1989fa;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(25, 137, 250, 0.2);
    margin-top: -16px;
  }

  .van-icon {
    font-size: 24px;
  }
}
</style>