import myAxios from "@/request";
// 用户注册
export const userRegister = async (param: any) => {
	const res = await myAxios.request({
		url: "/api/user/register",
		method: "post",
		data: param,
	});
	return res;
};

// 用户登录
export const userLogin = async (param: any) => {
	const res = await myAxios.request({
		url: "/api/user/login",
		method: "post",
		data: param,
	});
	return res;
};

// 用户注销
export const userLogout = async (param: any) => {
	const res = await myAxios.request({
		url: "/api/user/logout",
		method: "post",
		data: param,
	});
	return res;
};

// 获取当前登录用户信息
export const getUserInfo = async () => {
	const res = await myAxios.request({
		url: "/api/user/info",
		method: "get",
	});
    return res;
};
