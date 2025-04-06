import { defineStore } from "pinia";
import { getCurrentUser } from "@/api/user";

export const useLoginUserStore = defineStore("loginUser", () => {
	const loginUser = ref<any>({
		username: "未登录",
		password: "",
	});

	async function fetchLoginUser(username: string, password: string) {
		const res = await getCurrentUser();
		if (res.data.code === 0 && res.data.data) {
			loginUser.value = res.data.data;
		}
	}
	function setLoginUser(newLoginUser: any): void {
		loginUser.value = newLoginUser;
	}

	return { loginUser, fetchLoginUser, setLoginUser };
});
