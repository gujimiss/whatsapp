<template>
  <div class="balance-changes">

    <van-sticky>
      <HeaderSearch @search="onSearch" />
    </van-sticky>

    <div class="balance-changes-content">
      <!-- 提现操作区域 -->
      <div class="withdraw-section">
        <van-cell-group inset>
          <van-cell :title="$t('accountBalance')">
            <template #value>
              <span class="balance-amount">￥{{ balanceInfo.available }}</span>
            </template>
          </van-cell>
          <van-cell :title="$t('frozenAmount')">
            <template #value>
              <span class="frozen-amount">￥{{ balanceInfo.frozen }}</span>
            </template>
          </van-cell>
        </van-cell-group>

        <div class="withdraw-action">
          <van-button type="primary" block @click="handleWithdraw">{{ $t("applyWithdraw") }}</van-button>
        </div>
      </div>

      <!-- 余额变动记录 -->
      <div class="changes-section">
        <van-cell-group :title="$t('records')" inset>
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model:loading="loading" :finished="finished" :finished-text="$t('noMore')" @load="onLoad">
              <van-cell v-for="item in recordList" :key="item.id">
                <template #title>
                  <div class="record-item">
                    <div class="record-info">
                      <div class="record-type">{{ item.type }}</div>
                      <div class="record-time">{{ item.time }}</div>
                    </div>
                    <div :class="['record-amount', item.amount > 0 ? 'income' : 'expense']">{{ item.amount > 0 ? "+" : "" }}{{ item.amount }}</div>
                  </div>
                </template>
              </van-cell>
            </van-list>
          </van-pull-refresh>
        </van-cell-group>
      </div>
    </div>

    <!-- 提现弹窗 -->
    <withdraw-popup v-model:show="showWithdraw" :balance="balanceInfo.available" @submit="onWithdrawSubmit" />
  </div>
</template>

<script setup lang="ts">
import HeaderSearch from '@/components/HeaderSearch/index.vue';
import WithdrawPopup from "./components/Withdraw.vue";
import { useExample } from './js/balanceChanges';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const { onSearch, handleWithdraw, balanceInfo, recordList, refreshing, loading, finished, onRefresh, onLoad, showWithdraw, onWithdrawSubmit } = useExample(t);
</script>

<style lang="scss" scoped>
:deep(.van-cell-group--inset) {
  margin: 0;
}

.balance-changes {
  background: #f7f8fa;
  min-height: 100vh;
}

.balance-changes-content {
  padding: 16px;
}

.withdraw-section {
  margin-bottom: 16px;
}

.withdraw-action {
  margin-top: 16px;
}

.balance-amount {
  font-size: 20px;
  font-weight: bold;
  color: #ee0a24;
}

.frozen-amount {
  color: #969799;
}

.record-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.record-info {
  .record-type {
    font-size: 14px;
    font-weight: bold;
  }

  .record-time {
    font-size: 12px;
    color: #969799;
    margin-top: 4px;
  }
}

.record-amount {
  font-size: 16px;
  font-weight: bold;

  &.income {
    color: #ee0a24;
  }

  &.expense {
    color: #323233;
  }
}
</style>
