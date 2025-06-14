<template>
  <van-popup :show="show" round @update:show="updateShow" position="bottom" :style="{ padding: '16px' }">
    <div class="withdraw-popup">
      <div class="popup-title">{{ $t("applyWithdraw") }}</div>

      <!-- 账户余额显示 -->
      <div class="balance-info">
        <span class="label">{{ $t("availableBalance") }}</span>
        <span class="amount">￥{{ balance }}</span>
      </div>

      <!-- 提现表单 -->
      <van-form @submit="onSubmit">
        <van-field v-model="formData.bankCard" name="bankCard" :label="$t('bankCard')" :placeholder="$t('enterBankCard')" :rules="[{ required: true, message: $t('bankCardRequired') }]" />
        <van-field v-model="formData.username" name="username" :label="$t('realName')" :placeholder="$t('enterRealName')" :rules="[{ required: true, message: $t('realNameRequired') }]" />
        <van-field v-model="formData.password" type="password" name="password" :label="$t('withdrawPassword')" :placeholder="$t('enterWithdrawPassword')" :rules="[{ required: true, message: $t('passwordRequired') }]" />

        <div class="submit-btn">
          <van-button round block type="primary" native-type="submit">
            {{ $t("confirmWithdraw") }}
          </van-button>
        </div>
      </van-form>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  show: boolean;
  balance: number;
}>();

const emit = defineEmits(["update:show", "submit"]);

const formData = ref({
  bankCard: "",
  username: "",
  password: "",
});

// 添加更新show的方法
const updateShow = (value: boolean) => {
  emit("update:show", value);
};

const onSubmit = (values: any) => {
  emit("submit", values);
};
</script>

<style lang="scss" scoped>
.withdraw-popup {
  padding-bottom: 16px;
}

.popup-title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
}

.balance-info {
  background: #f8f8f8;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    color: #666;
  }

  .amount {
    font-size: 20px;
    font-weight: bold;
    color: #ee0a24;
  }
}

.submit-btn {
  margin-top: 24px;
}
</style>
