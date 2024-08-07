// import "./assets/reset.scss";
import { createApp } from "vue";
import App from "./App.vue";
// ... 纯表格
import VxeTable from "vxe-table";
import "vxe-table/lib/style.css";

import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'

import * as echarts from "echarts";
const app = createApp(App);

app.use(VxeTable);
app.use(VxeUI);
app.config.globalProperties.$echarts = echarts;

app.mount("#app");
