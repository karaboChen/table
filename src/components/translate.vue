<script setup>
//請放在App.vue 變成 全局註冊方式 就不需要再局部註冊
import { computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import zhTw from 'element-plus/dist/locale/zh-tw.mjs'

const language = ref('zhCn')

const locale = computed(() => {
  if (language.value === 'zhCn') {
    return zhCn
  } else if (language.value === 'en') {
    return en
  } else {
    return zhTw
  }
})


</script>

<template>
  <el-form-item label="選擇語言">
    <el-select v-model="language">
      <el-option label="檢體中文" value="zhCn" />
      <el-option label="英文" value="en" />
      <el-option label="繁體中文" value="zhTw" />
    </el-select>
  </el-form-item>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>


