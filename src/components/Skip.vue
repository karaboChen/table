<script setup>
import Table from './Table.vue'
import { ref } from 'vue'
const result = ref(true)

</script>

<template>
  <el-skeleton animated :loading="result" :throttle="500">
    <template #template>
      <div class="box">
        <el-skeleton-item variant="image" style="width: 400px; height: 267px" />
        <el-skeleton-item variant="image" style="width: 400px; height: 267px" />
        <el-skeleton-item variant="image" style="width: 400px; height: 267px" />
        <el-skeleton-item variant="image" style="width: 400px; height: 267px" />
      </div>
    </template>
    <template #default>
      <Table />
    </template>
  </el-skeleton>
</template>

<style  scoped>

.box{
  display: flex;
}
.el-skeleton {
  --el-skeleton-color: #f8bb82;
}

.ww {
  margin-top: 10px;
  --el-skeleton-color: red;
}
</style>