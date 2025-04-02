import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

// 定义路由
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
