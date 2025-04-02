<template>
	<div id="globalHeader">
		<a-row :wrap="false">
			<a-col flex="200px">
				<div class="title-bar">
					<img class="logo" src="../assets/logo.png" alt="logo" />
					<div class="title">simonsun blog</div>
				</div>
			</a-col>
			<a-col flex="auto">
				<a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="doMenuClick" />
			</a-col>

			<a-col flex="100px">
				<div class="user-login-status">
					<a-button type="primary" href="/user/login">登录</a-button>
				</div>
			</a-col>
		</a-row>
	</div>
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
import { MailOutlined, AppstoreOutlined, SettingOutlined, HomeOutlined, CrownOutlined } from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";

const router = useRouter();
console.log("Router instance:", router); // 调试日志

// 点击菜单后的路由跳转事件
const doMenuClick = ({ key }: { key: string }) => {
	console.log("Clicked key:", key); // 调试日志
	if (router) {
		router.push(key);
	} else {
		console.error("Router is not initialized");
	}
};
// 监听路由变化，更新当前菜单项
router.afterEach((to, from) => {
	current.value = [to.path];
});

const current = ref<string[]>(["mail"]);
const items = ref<MenuProps["items"]>([
	{
		key: "/",
		icon: () => h(HomeOutlined),
		label: "主页",
		title: "主页",
	},
	{
		key: "/user/login",
		icon: () => h(MailOutlined),
		label: "用户登录",
		title: "用户登录",
	},
	{
		key: "/user/register",
		icon: () => h(AppstoreOutlined),
		label: "用户注册",
		title: "用户注册",
	},
	{
		key: "/admin/userManage",
		icon: () => h(CrownOutlined),
		label: "用户管理",
		title: "用户管理",
	},
	{
		key: "/about",
		icon: () => h(SettingOutlined),
		label: "关于",
		title: "关于",
	},
	{
		key: "blogs",
		icon: () => h(SettingOutlined),
		label: h("a", { href: "https://simonsun.xyz", target: "_blank" }, "Simon's Blog"),
		title: "Simon's Blog",
	},
]);
</script>

<style scope>
.title-bar {
	display: flex;
	align-items: center;
}
.title {
	color: black;
	font-size: 18px;
	margin-left: 16px;
}
.logo {
	height: 60px;
}
</style>
