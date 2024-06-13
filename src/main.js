// import "./assets/reset.scss";
import { createApp } from "vue";
import App from "./App.vue";
import VxeUITable from "vxe-table";
import "vxe-table/lib/style.css";

import * as echarts from "echarts";
const app = createApp(App);

app.use(VxeUITable);
app.config.globalProperties.$echarts = echarts;

app.mount("#app");
