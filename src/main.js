import './assets/reset.scss'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as echarts from 'echarts';
const app = createApp(App);
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

app.use(ElementPlus, {
  locale: zhCn,
})

app.config.globalProperties.$echarts = echarts;
app.mount('#app')
