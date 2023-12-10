<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick,onActivated } from 'vue'
const tableData = ref([
  {
    date: '2016-05-01',
    name: '1',
    state: 'California',
    city: 'Los Angeles',
  },
  {
    date: '2016-05-02',
    name: '2',
    state: 'California',
    city: 'Los Angeles',
  },
  {
    date: '2016-05-03',
    name: '3',
    state: 'California',
    city: 'Los Angeles',
  },
  {
    date: '2016-05-04',
    name: '4',
    state: 'California',
    city: 'Los Angeles',
  },
  {
    date: '2016-05-05',
    name: '5',
    state: 'California',
    city: 'Los Angeles',
  },

  {
    date: '2016-05-06',
    name: '6',
    state: 'California',
    city: 'Los Angeles',
  },
  {
    date: '2016-05-07',
    name: '7',
    state: 'California',
    city: 'Los Angeles',
  },
])

const tv = ref(null)
const count = ref(0)

const targetRowIndex = ref(3);



onMounted(() => {
  tv.value.setCurrentRow(tableData.value[targetRowIndex.value]) 
})

setTimeout(()=>{
  tv.value.setScrollTop(40*3)
},100)




function keymove(e) {
  //'ArrowDown'   'ArrowUp'
  if (e.code === 'ArrowDown') {
    if (count.value === tableData.value.length - 1) {
      console.log("到底")
      return
    }
    count.value++

  } else if (e.code === 'ArrowUp') {
    if (count.value === 0) {
      console.log("到頂")
      return
    }
    count.value--
  }
}

watch(() => count.value, () => {
  tv.value.setCurrentRow(tableData.value[count.value])
}
)
function row(row) {
  count.value = row.index
}
function tablerow({ row, rowIndex }) {
  row.index = rowIndex
}

function color({row, rowIndex}){
  if(row.name === '6'){
    return {'color':'red'}
  }
  console.log(row)
}
const is_show = ref(false)
</script>

<template>
  <el-table :data="tableData" style="width: 65%" max-height="150" @keydown="keymove" :highlight-current-row="true"
    ref="tv" @row-click="row" :row-class-name="tablerow" element-loading-text="請等待..." class="vv" :cell-style="color">
    <el-table-column prop="date" label="Date" width="150" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="state" label="State" width="120" />
    <el-table-column prop="city" label="City" width="120" v-if="is_show" />
  </el-table>
</template>

<style scoped></style>

