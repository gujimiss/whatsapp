<template>
  <div class="form">
    <h5 class="title">{{ useI18nText('signUpTitle') }}</h5>

    <!-- 增加区号选择下拉框 -->
    <van-field :label="useI18nText('phoneNumber')" label-align="top">
      <template #input>
        <van-popover v-model:show="showPopover" :actions="areaCodeOptions" @select="onSelect">
          <template #reference>
            <span>{{ areaCode }}</span>
          </template>
        </van-popover>
        <van-field class="phone" v-model="phone" type="number" :placeholder="useI18nText('enterPhone')" border clearable />
      </template>
    </van-field>

    <!-- 增加区号选择下拉框 -->
    <van-field label="whatsapp" label-align="top">
      <template #input>
        <van-popover v-model:show="showPopover" :actions="areaCodeOptions" @select="onSelect">
          <template #reference>
            <span>{{ areaCode }}</span>
          </template>
        </van-popover>
        <van-field class="phone" v-model="phone" type="number" :placeholder="useI18nText('enterWhatsapp')" border clearable />
      </template>
    </van-field>

    <!-- Telegram -->
    <van-field label="Telegram" label-align="top" v-model="password" :placeholder="useI18nText('enterTelegram')" border clearable />

    <!-- 登录密码的输入框 -->
    <van-field :label="useI18nText('loginPassword')" label-align="top" v-model="password" type="password" :placeholder="useI18nText('enterPassword')" border clearable />

    <!-- 邀请码 -->
    <van-field :label="useI18nText('invitationCode')" label-align="top" v-model="password" :placeholder="useI18nText('enterInvitationCode')" border clearable />

    <!-- 立即注册 -->
    <van-button class="btn" type="success" @click="handleLogin" block>{{ useI18nText('signUpButton') }}</van-button>

    <!-- 提示还未注册？立即注册 -->
    <div class="register-tip">
      <span>{{ useI18nText('existingAccount') }}</span>
      <a href="javascript:void(0)" @click="handleRegister">{{ useI18nText('loginNow') }}</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18nText } from '@/hooks/i18nText'
import { useExample } from './js/sign.ts'
const emit = defineEmits(['change'])
const { showPopover, areaCodeOptions, onSelect, areaCode, phone, password, handleLogin, handleRegister } = useExample(emit)
</script>
<style lang="scss" scoped>
.form {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
}
.title {
  font-size: 18px;
  font-weight: 400;
}
.btn {
  margin: 10px 0;
  font-size: 16px;
}
.register-tip {
  font-size: 14px;
  text-align: center;
}
</style>
