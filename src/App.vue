<script setup lang="ts">
import BasicLayout from "./layouts/BasicLayout.vue";
import { useLoginUserStore } from "@/store/useLoginUserStore";

const loginUserStore = useLoginUserStore();

loginUserStore.fetchLoginUser()
</script>

<template>
	<div id="app">
		<BasicLayout />
	</div>
</template>

<style scoped></style>
