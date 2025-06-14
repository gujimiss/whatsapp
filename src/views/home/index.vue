<template>
  <div class="home-container">
    <!-- 顶部导航 -->
    <header class="top-nav">
      <van-image class="logo" :src="logo" :alt="$t('platformLogo')" />
      <div class="nav-icons">
        <van-icon name="bell" color="#07c160" @click="showNotice('account')" />
        <van-icon name="chat" color="#07c160" @click="showNotice('message')" />
        <van-icon name="balance-o" color="#07c160" @click="showNotice('gift')" />
        <van-icon name="wallet" @click="goWallet" />
        <!-- 右上切换多语言操作 -->
        <SwitchLang position />
      </div>
    </header>

    <div class="home-content">
      <!-- 账户余额区域 -->
      <section class="balance-section" @click="goBalance">
        <div class="info">
          <div class="label">{{ $t('accountBalance') }}</div>
          <div class="amount">15.002</div>
        </div>
        <van-image class="circular-image" :src="heart" />
      </section>

      <!-- 已连接账户 -->
      <section class="connected-accounts" @click="goAccounts">
        <div class="info">
          <div class="label">{{ $t('connectedAccounts') }}</div>
          <div class="amount">10</div>
        </div>
        <van-image class="circular-image" :src="stethoscope" />
      </section>

      <!-- 已邀请用户 -->
      <section class="invited-users" @click="goInvited">
        <div class="info">
          <div class="label">{{ $t('invitedUsers') }}</div>
          <div class="amount">76</div>
        </div>
        <van-image class="circular-image" :src="calendar" />
      </section>

      <!-- 累计获得收益 -->
      <section class="total-income" @click="goBalance">
        <div class="info">
          <div class="label">{{ $t('totalIncome') }}</div>
          <div class="amount">$560.005</div>
        </div>
        <van-image class="circular-image" :src="dollar" />
      </section>

      <!-- 收益分析 -->
      <section class="income-content">
        <div class="analysis-header">
          <div class="label">{{ $t('incomeAnalysis') }}</div>
          <!-- 时间范围选择下拉框 -->
          <div class="filter-section">
            <van-dropdown-menu>
              <van-dropdown-item v-model="analysisRange" :options="rangeOptions" @change="handleRangeChange" />
            </van-dropdown-menu>
          </div>
        </div>
        <income-analysis :data="echartsData" />
      </section>

      <!-- 收益排行 -->
      <section class="ranking">
        <div class="ranking-header">{{ $t('incomeRanking') }}</div>
        <van-tabs v-model:active="active" shrink type="card" color="#07c160">
          <van-tab :title="$t('totalRanking')"></van-tab>
          <van-tab :title="$t('monthRanking')"></van-tab>
          <van-tab :title="$t('weekRanking')"></van-tab>
        </van-tabs>
        <div class="ranking-conter">
          <div class="rankin-item van-hairline--bottom" v-for="item in rankingList" :key="item.id">
            <van-image class="thumb" :src="logo" />
            <div class="rankin-info">
              <div class="rankin-name">{{ item.name }}</div>
              <div class="rankin-accounts">
                {{ $t('linkedAccounts', { count: item.accounts }) }},
                {{ $t('invitedFriends', { count: item.invited }) }}
              </div>
            </div>
            <div class="rankin-income">{{ $t('income', { amount: item.income }) }}</div>
          </div>
        </div>
      </section>
    </div>

    <!-- 底部导航 -->
    <BottomTab />
  </div>
</template>

<script setup lang="ts">
import IncomeAnalysis from './components/IncomeAnalysis.vue';
import BottomTab from '@/components/BottomTab/index.vue';
import logo from '@/assets/vue.svg';
import heart from '@/assets/heart.png';
import stethoscope from '@/assets/stethoscope.png';
import calendar from '@/assets/calendar.png';
import dollar from '@/assets/dollar.png';
import { useExample } from './js/home';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const {
  analysisRange,
  rangeOptions,
  active,
  rankingList,
  showNotice,
  goInvited,
  goWallet,
  goBalance,
  goAccounts,
  handleRangeChange,
  echartsData
} = useExample(t);
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f7f8fa;
  padding-bottom: 60px; // 预留底部导航高度
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);

  .logo {
    width: 40px;
    height: 40px;
  }

  .nav-icons>i {
    margin-left: 16px;
    font-size: 22px;
    cursor: pointer;
  }
}

.home-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.balance-section,
.connected-accounts,
.invited-users,
.total-income {
  margin-bottom: 10px;
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    text-align: left;

    .label {
      font-size: 14px;
      color: #fff;
    }

    .amount {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }
  }

  .circular-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
    border: 1px solid #f0f0f0;
    padding: 10px;
    box-sizing: border-box;
  }
}

.balance-section {
  background: linear-gradient(90deg, #ffe5e5 -80%, #ff4d4f 100%);
}

.connected-accounts {
  background: linear-gradient(90deg, #e6ffed -80%, #52c41a 100%);
}

.invited-users {
  background: linear-gradient(90deg, #e6f7ff -80%, #1890ff 100%);
}

.total-income {
  background: linear-gradient(90deg, #f3e6ff -80%, #722ed1 100%);
}

.income-content {
  margin-top: 10px;
  margin-bottom: 16px;
  background-color: #fff;
  border-radius: 12px;

  .analysis-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    margin-bottom: 10px;
  }

  :deep(.van-dropdown-menu__bar) {
    padding-right: 15px;
    box-shadow: none;

    .van-dropdown-item {
      width: 100%;
      text-align: left;
      font-size: 14px;
      color: #333;
    }
  }
}

.ranking {
  background: #fff;
  border-radius: 12px;
  padding: 12px;

  .ranking-header {
    font-weight: bold;
    margin-bottom: 8px;
    text-align: left;
    font-size: 16px;
  }

  :deep(.van-tabs__wrap) {
    text-align: left;

    .van-tabs__nav {
      margin: 0;
      border: none;

      .van-tab {
        border: none;
      }
    }
  }

  .ranking-conter {
    margin-top: 10px;
  }

  .rankin-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    &:last-child {
      border-bottom: none;
    }

    .thumb {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
      border: 1px solid #f0f0f0;
      overflow: hidden;
    }

    .rankin-info {
      flex: 1;
      text-align: left;
      margin-left: 8px;
      margin-right: 8px;

      .rankin-name {
        font-size: 14px;
        font-weight: bold;
        margin-right: 8px;
      }

      .rankin-accounts {
        font-size: 12px;
        color: #999;
      }
    }

    .rankin-income {
      font-weight: bold;
      color: orange;
      font-size: 14px;
    }
  }
}
</style>
