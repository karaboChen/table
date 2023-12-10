import './assets/reset.scss'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as echarts from 'echarts';
const app = createApp(App);

app.use(ElementPlus)
app.config.globalProperties.$echarts = echarts;
app.mount('#app')
