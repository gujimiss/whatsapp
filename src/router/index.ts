import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
// 假设注册页面组件为 RegisterPage.vue，可按需修改
// import RegisterPage from '@/components/RegisterPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/information",
    name: "Information",
    component: () => import("@/views/information/index.vue"),
  },
  {
    path: "/invite",
    name: "invite",
    component: () => import("@/views/invite/index.vue"),
  },
  {
    path: "/AFKAccount",
    name: "AFKAccount",
    component: () => import("@/views/AFKAccount/index.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/user/index.vue"),
  },
  {
    path: "/balanceChanges",
    name: "balanceChanges",
    component: () => import("@/views/user/balanceChanges.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/user/login.vue"),
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: RegisterPage
  // },
  // 可以添加更多路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
