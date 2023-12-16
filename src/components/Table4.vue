
<script setup>
import { ref } from 'vue';
const tableData = ref([
  {
    date: '2023-12-16',
    name: '小明',
    address: '高雄市小港區',
  },
  {
    date: '2023-12-17',
    name: '小華',
    address: '高雄市前鎮區',
  },
  {
    date: '2023-12-18',
    name: '小美',
    address: '高雄市左營區',
  },
]);

const handleEdit = (row) => {
  console.log('edit', row);
};

const handleDelete = (row) => {
  console.log('delete', row);
  const index = tableData.value.indexOf(row);
  if (index !== -1) {
    tableData.value.splice(index, 1);
  }
};
</script>



<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="address" label="地址">
      <template #default="{ row }">
        <div :style="{ backgroundColor: row.address === '高雄市前鎮區' ? 'red' : '' }">{{ row.address }}</div>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="{ row }">
        <el-button type="primary" @click="handleEdit(row)">編輯</el-button>
        <el-button type="danger" @click="handleDelete(row)">刪除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>



