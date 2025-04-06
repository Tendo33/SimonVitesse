import { createApp } from "vue";
//import './style.css'
import App from "@/App.vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import router from "@/router";

const app = createApp(App);
const pinia = createPinia();

app.use(Antd);
app.use(pinia);
app.use(router); // 挂载路由实例
app.mount("#app");
