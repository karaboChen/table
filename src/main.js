// import "./assets/reset.scss";
import { createApp } from "vue";
import App from "./App.vue";
// ... 纯表格
import VxeTable from "vxe-table";
import "vxe-table/lib/style.css";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'





import * as echarts from "echarts";

import print from 'vue3-print-nb'
const app = createApp(App);

app.use(VxeTable);
app.use(VxeUI);
app.use(print)

app.config.globalProperties.$echarts = echarts;

app.mount("#app");
