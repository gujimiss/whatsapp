<template>
  <div class="login-container">
    <!-- 右上切换多语言操作 -->
    <SwitchLang />

    <!-- 居中显示的卡片 -->
    <div class="login-card">
      <!-- logo 居中显示 -->
      <van-image class="logo" fit="cover" round :src="logo" />
      <component :is="component" @change="handleChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/vue.svg'
import Login from '@/components/Login/index.vue'
import Sign from '@/components/Sign/index.vue'
let component = ref(markRaw(Login))
const handleChange = (val: string) => {
  if (val === 'login') {
    component.value = markRaw(Login)
  } else {
    component.value = markRaw(Sign)
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #5b7fff 0%, #33ccfc 100%);
  background-image: url('@/assets/mountain-scene.jpg');
  background-size: cover;
  background-position: center 30%;
  background-attachment: fixed;
  padding: 20px 0px;
  box-sizing: border-box;
}
.login-card {
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
}
.logo {
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
