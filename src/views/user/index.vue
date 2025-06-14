<template>
  <div class="user-center-container">
    <!-- 第一块：头像区域 -->
    <div class="profile-header">
      <div class="profile-background">
        <van-image class="profile-avatar" :src="avatar" round />
        <div class="profile-username">{{ username }}</div>
      </div>
    </div>

    <div class="cell-box">
      <!-- 第二块：账户余额 -->
      <!-- <van-cell :title="useI18nText('balance')" :value="`$${balance}`" is-link @click="goToBalance" /> -->
      <van-cell :title="$t('balance')" :value="`$${balance}`" is-link @click="goToBalanceChanges" />
      <van-cell :title="$t('connectedAccounts')" :value="`${accNum}`" />
      <van-cell :title="$t('invitedUsers')" :value="`${invitedNum}`" />
      <van-cell :title="$t('totalIncome')" :value="`$${balance}`" />

      <!-- 第三块：退出按钮 -->
      <div class="logout-button">
        <van-button type="danger" block @click="logout">
          {{ $t("logout") }}
        </van-button>
      </div>
    </div>

    <!-- 底部导航 -->
    <BottomTab />

  </div>

</template>

<script setup lang="ts">
import BottomTab from '@/components/BottomTab/index.vue';
import logo from "@/assets/vue.svg";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// 用户数据
const avatar = ref(logo); // 替换为实际头像地址

const username = ref("John Doe"); // 替换为实际用户名
const balance = ref(150.25); // 替换为实际账户余额
const accNum = ref(15); // 连接的用户数量
const invitedNum = ref(150); // 要求的用户数量

const router = useRouter();
// 跳转到账户余额页面
const tips = t("balance");

const goToBalanceChanges = () => {
  router.push("/balanceChanges");
};

// 退出登录
const logout = () => {
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.user-center-container {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.profile-header {
  width: 100%;
  background: linear-gradient(135deg, #5b7fff 0%, #33ccfc 100%);
  background-image: url("@/assets/mountain-scene.jpg");
  background-size: cover;
  background-position: center;
  padding: 24px 0;
  text-align: center;
  color: #fff;

  .profile-background {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-avatar {
    width: 100px;
    height: 100px;
    border: 2px solid #fff;
    margin-bottom: 12px;
  }

  .profile-username {
    font-size: 18px;
    font-weight: bold;
  }
}

.cell-box {
  padding: 16px;

  :deep(.van-cell__title) {
    text-align: left;
  }
}

.logout-button {
  margin-top: 24px;
  width: 100%;
}
</style>
