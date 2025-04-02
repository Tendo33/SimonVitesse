import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import AboutView from "../views/About.vue";

// 定义路由
const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "About",
		component: AboutView,
	},
	{
		path: "/user/login",
		name: "Login",
		component:  HomeView,
	},
	{
		path: "/user/register",
		name: "Register",
		component:  HomeView,
	},
	{
		path: "/admin/userManage",
		name: "adminUserManage",
		component:  HomeView,
	},
];

// 创建路由实例
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
