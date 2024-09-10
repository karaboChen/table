<script setup>
import { reactive } from "vue";
const printObj = reactive({
  id: "printMe",
  popTitle: "good print",
  extraCss:
    "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
  extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
  beforeOpenCallback(vue) {
    vue.printLoading = true;
    console.log("打开之前");
  },
  openCallback(vue) {
    vue.printLoading = false;
    console.log("执行了打印");
  },
  closeCallback(vue) {
    console.log("关闭了打印工具");
  },
});
</script>

<template>
  <div id="printMe">
    <p>葫芦娃，葫芦娃</p>
    <p>一根藤上七朵花</p>
    <p>小小树藤是我家 啦啦啦啦</p>
    <p>叮当当咚咚当当　浇不大</p>
    <p>叮当当咚咚当当 是我家</p>
    <p>啦啦啦啦</p>
    <p>...</p>
  </div>
  <button v-print="printObj">Print the entire page</button>
</template>

<style lang="scss" scoped></style>
