<template>

  <div class="invite-container">

    <van-sticky>
      <HeaderSearch @search="onSearch" />
    </van-sticky>

    <div class="invite-content">
      <div class="invite-header">
        <!-- 邀请统计信息 -->
        <section class="invite-summary">
          <div class="summary-item">
            <span class="label">{{ $t('totalInvited') }}: </span>
            <span class="value">{{ totalInvited }}</span>
          </div>
          <div class="summary-item">
            <span class="label">{{ $t('totalIncome') }}: </span>
            <span class="value">${{ totalIncome }}</span>
          </div>
        </section>

        <!-- 复制邀请链接 -->
        <section class="invite-link">
          <div class="link-label">{{ $t('copyLink') }}</div>
          <div class="link-content">
            <input type="text" readonly :value="inviteLink" class="link-input" />
            <van-button type="primary" @click="copyLink">{{ $t('copy') }}</van-button>
          </div>
        </section>

        <!-- 收益说明 -->
        <section class="invite-description">
          <p>{{ $t('description') }}</p>
        </section>
      </div>

      <!-- 用户列表 TAB -->
      <section class="invite-tabs">
        <van-tabs v-model:active="activeTab">
          <van-tab :title="$t('levelOne')">
            <div class="user-list">
              <div class="user-item" v-for="user in levelOneUsers" :key="user.id">
                <div>{{ $t('userName', { name: user.name }) }}</div>
                <div>{{ $t('accountCount', { count: user.accounts || 0 }) }}</div>
                <div>{{ $t('subordinateCount', { count: user.subordinates || 0 }) }}</div>
                <div>{{ $t('broughtIncome', { income: user.income }) }}</div>
                <div>{{ $t('inviteTime', { time: user.inviteTime || 'N/A' }) }}</div>
              </div>
            </div>
          </van-tab>
          <van-tab :title="$t('levelTwo')">
            <div class="user-list">
              <div class="user-item" v-for="user in levelTwoUsers" :key="user.id">
                <div>{{ $t('userName', { name: user.name }) }}</div>
                <div>{{ $t('accountCount', { count: user.accounts || 0 }) }}</div>
                <div>{{ $t('subordinateCount', { count: user.subordinates || 0 }) }}</div>
                <div>{{ $t('broughtIncome', { income: user.income }) }}</div>
                <div>{{ $t('inviteTime', { time: user.inviteTime || 'N/A' }) }}</div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderSearch from '@/components/HeaderSearch/index.vue';
import { useExample } from './js/invite'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const {
  totalInvited,
  totalIncome,
  inviteLink,
  activeTab,
  levelOneUsers,
  levelTwoUsers,
  copyLink,
  onSearch
} = useExample(t)
</script>

<style lang="scss" scoped>
.invite-container {
  min-height: 100vh;
}

.invite-content {
  padding: 16px;
  box-sizing: border-box;
  background-color: #f7f8fa;
}

.invite-header {
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.invite-summary {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  .summary-item {
    text-align: center;

    .label {
      font-size: 14px;
      color: #888;
    }

    .value {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
  }
}

.invite-link {
  margin-bottom: 16px;

  .link-label {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .link-content {
    display: flex;
    align-items: center;

    .link-input {
      flex: 1;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-right: 8px;
    }
  }
}

.invite-description {
  margin-bottom: 16px;
  font-size: 14px;
  color: #666;
}

.invite-tabs {
  .user-list {
    margin-top: 10px;

    .user-item {
      display: flex;
      justify-content: space-between;
      padding: 16px;
      flex-wrap: wrap;
      margin-bottom: 10px;
      background-color: #fff;

      >div {
        width: 50%;
        text-align: left;
        margin-bottom: 5px;
        box-sizing: border-box;
        font-size: 14px;

        &:last-child {
          width: 100%;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
