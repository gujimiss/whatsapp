<template>
  <div class="afk-account-container">
    <van-sticky>
      <HeaderSearch @search="onSearch" />
    </van-sticky>

    <!-- 添加挂机账号按钮 -->
    <van-button class="add-account" type="primary" @click="showAddAccountModal">
      {{ $t('addAccount') }}
    </van-button>

    <!-- 已挂机账号列表 -->
    <div class="account-list-wrapper">
      <div class="account-list">
        <div class="account-item" v-for="account in accounts" :key="account.id">
          <div>{{ $t('app') }}: {{ account.app }}</div>
          <div>{{ $t('status') }}: {{ account.status }}</div>
          <div>{{ $t('duration') }}: {{ account.duration }}</div>
          <div>{{ $t('totalIncome') }}: ${{ account.totalIncome }}</div>
          <div>{{ $t('account') }}: {{ account.account }}</div>
          <div>{{ $t('connectTime') }}: {{ account.connectTime }}</div>
        </div>
      </div>
    </div>

    <!-- 添加账号弹窗 -->
    <van-popup v-model:show="showModal" position="bottom">
      <div class="modal-content">
        <h3>{{ $t('selectApp') }}</h3>
        <van-radio-group v-model="selectedApp">
          <van-radio name="Whatsapp">Whatsapp</van-radio>
          <van-radio name="Telegram">Telegram</van-radio>
        </van-radio-group>
        <van-button type="primary" size="small" @click="showConnectionOptions">
          {{ $t('next') }}
        </van-button>
      </div>
    </van-popup>

    <!-- 连接方式弹窗 -->
    <van-popup v-model:show="showConnectionModal" position="bottom">
      <div class="modal-content">
        <h3>{{ $t('selectConnection') }}</h3>
        <van-radio-group v-model="selectedConnection">
          <van-radio name="QRCode">{{ $t('qrCode') }}</van-radio>
          <van-radio name="DeviceCode">{{ $t('deviceCode') }}</van-radio>
        </van-radio-group>
        <div v-if="selectedConnection === 'DeviceCode'" class="device-code-inputs">
          <van-field v-model="phoneNumber" :label="`${$t('phoneNumber')}：`" />
          <van-field v-model="deviceCode" :label="`${$t('deviceCodeInput')}：`" />
        </div>
        <van-button type="primary" size="small" @click="connectAccount">
          {{ $t('connect') }}
        </van-button>
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import HeaderSearch from '@/components/HeaderSearch/index.vue';
import { useExample } from './js/AFKAccount';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const { showModal, selectedApp, deviceCode, showConnectionModal, selectedConnection, phoneNumber, onSearch, accounts, showAddAccountModal, showConnectionOptions, connectAccount } = useExample(t);
</script>

<style lang="scss" scoped>
.afk-account-container {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.add-account {
  margin: 16px;
  width: calc(100% - 32px);
}

.account-list-wrapper {
  padding: 16px;
  overflow-x: auto;
}

.account-item {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

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

.modal-content {
  padding: 16px;

  h3 {
    margin-bottom: 10px;
  }

  .van-radio {
    margin-bottom: 10px;
  }
}

.device-code-inputs {
  margin-top: 16px;

  .van-field {
    margin-bottom: 10px;
    box-shadow: inset 1px 1px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>
