<script setup>
import { ref, onMounted, nextTick } from "vue";
import * as signalR from "@microsoft/signalr";
let connection = null;
const tb = ref(null);
const highlightedId = ref(null);
onMounted(async () => {
  //禁止協商方式
  // let  option = {
  //   skipNegotiation: true, transport:signalR.HttpTransportType.WebSockets
  // }
  connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5120/myhub") //後面可加參數 withUrl("http://localhost:5120/myhub", option)
    .withAutomaticReconnect()
    .build();
  await connection.start();
  //這邊要監聽 後端給的事件名稱
  connection.on("接收公共訊息", (data) => {
    console.log(data);
    tableData.value = data;
  });

  connection.on("aaa", (x, y, data) => {
    // tableData.value[x][y].id=data
    tableData.value[x].id = data;
    highlightedId.value = "99";
    setTimeout(() => {
      highlightedId.value = null;
    }, 2000);
  });
});

async function ww() {
  await connection.invoke("Sendmessage");
}

async function ww1() {
  await connection.invoke("Sendmessage1", 0, 1, "99");
}

const tableData = ref([]);
</script>

<template>
  <el-table ref="tb" :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="Date" width="180">
      <template #default="scope">
        <div :class="{ highlight: scope.row.id === highlightedId }">
          {{ scope.row.id }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Name" width="180" />
  </el-table>
  <button @click="ww">++</button>
  <button @click="ww1">--</button>
</template>

<style>
.highlight {
  background-color: yellow;
}
</style>
