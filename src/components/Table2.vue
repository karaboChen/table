<script setup>
import { ref } from 'vue'
const tableData = ref([
  {
    id: '1',
    date: '2016-05-01',
    name: 'Tom',
    pop: '3999',
  },
  {
    id: '2',
    date: '2016-05-02',
    name: 'Tom',
    pop: '1999',
  },
  {
    id: '3',
    date: '2016-05-03',
    name: 'Tom',
    pop: '9999',
  },
])
const tableColumns = [
  { prop: 'date', label: 'Date', width: '180' },
  { prop: 'name', label: 'Name', width: '180' },
  { prop: 'pop', label: 'pop', width: '180' },
]



const expandedRowKeys = ref([])

function remove(array, val) {
  const index = array.indexOf(val)
  if (index > -1) {
    array.splice(index, 1)
    return true
  }
  return false
}




function expandOpen(row) {
  if (!remove(expandedRowKeys.value, row.id)) {
    expandedRowKeys.value.push(row.id)
  }
}
function vv(a,b){
  console.log(a)
  console.log(b)
}
</script>

<template>
  <el-table :data="tableData" style="width: 100%" :row-key="(row) => {
    return row.id
  }
    " :expand-row-keys="expandedRowKeys" @expand-change="expandOpen">
    <el-table-column type="expand">
      <template #default="{ row }">
        <el-input v-model="row.tt"></el-input>
        <el-input v-model="row.title"></el-input>
        <button @click="vv(row.tt,row.title)">++</button>
      </template>
    </el-table-column>
    <el-table-column v-for="column in tableColumns" :key="column.prop" v-bind="column"></el-table-column>
  </el-table>
</template>


