import "./assets/reset.scss";
import { createApp } from "vue";
import i18n from "./compasble/index";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
import App from "./App.vue";
import * as echarts from "echarts";
const app = createApp(App);

VXETable.setConfig({
  // 对组件内置的提示语进行国际化翻译
  i18n: (key, args) => i18n.global.t(key, args),
});

app.use(VXETable);
app.config.globalProperties.$echarts = echarts;
app.mount("#app");
