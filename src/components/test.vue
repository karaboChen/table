
<script setup>
import { ref } from 'vue';

const tableData = defineModel()

const tmp = ref({
  row: '',
  col: ''
})

function ss(row, column) {
  tmp.value.row = row.id
  tmp.value.col = column.id
}

const handleEdit = (row) => {
  console.log('edit', row.name);
  row.name = "9998"

};

const handleDelete = (row) => {
  console.log('delete', row);
  const index = tableData.value.indexOf(row);
  if (index !== -1) {
    tableData.value.splice(index, 1);
  }
};

const input =ref('')

</script>



<template>
  <el-table :data="tableData" style="width: 100%" @cell-click="ss">
    <el-table-column prop="date" label="日期">
      <template #default="{ row, column }">
        <el-input v-if="row.id === tmp.row && column.id === tmp.col" v-model="input"  placeholder="Please input" />
        <div v-else>{{ row.date }}</div>
      </template>
    </el-table-column>
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



