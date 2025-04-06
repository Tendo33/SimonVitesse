import { defineStore } from "pinia";
import { userLogin, getCurrentUser } from "@/api/user";

export const useLoginUserStore = defineStore("loginUser", () => {
	const loginUser = ref<any>({
        username: "",
        password: "",
    });
	
    async function fetchLoginUser(username: string, password: string) {
        const res = await getCurrentUser();
        if (res.data.code === 0 && res.data.data) {
            loginUser.value = res.data.data;
        }
    }
});
