import { defineStore } from "pinia";
import { getCurrentUser } from "@/api/user";

export const useLoginUserStore = defineStore("loginUser", () => {
	// 响应式变量
	const loginUser = ref<any>({
		username: "Simon",
		password: "",
	});
	// 远程获取登录用户信息
	async function fetchLoginUser() {
		const res = await getCurrentUser();
		if (res.data.code === 0 && res.data.data) {
			loginUser.value = res.data.data;
		}
		// else {
		//   setTimeout(() => {
		//     loginUser.value = { username: "小黑子", id: 1 };
		//   }, 3000);
		// }
	}
	//
	function setLoginUser(newLoginUser: any): void {
		loginUser.value = newLoginUser;
	}

	return { loginUser, fetchLoginUser, setLoginUser };
});
