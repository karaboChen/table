<template>
  <button @click="save">++</button>
  <div>
    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      max-height="400"
      :column-config="{ resizable: true }"
      :data="tableData"
      :edit-config="{ trigger: 'click', mode: 'row' }"
      @edit-activated="editActivatedEvent"
    >
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="attr3" title="Project type" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatProjectType(row) }}</span>
        </template>

        <template #edit="{ row }">
          <vxe-select
            v-model="row.attr3"
            :options="ptypeList"
            transfer
            @change="ptypeChangeEvent(row)"
          ></vxe-select>
        </template>
      </vxe-column>

      <vxe-column field="attr4" title="Project name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select
            v-model="row.attr4"
            :options="pnameList"
            transfer
          ></vxe-select>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import XEUtils from "xe-utils";
const tableRef = ref();
const tableData = ref([
  {
    id: 10001,
    name: "Test1",
    nickname: "T1",
    role: "Develop",
    sex: "0",
    sex2: ["0"],
    num1: 40,
    age: 28,
    address: "Shenzhen",
    date12: "",
    date13: "",
    attr3: "",
    attr4: "",
  },
  {
    id: 10002,
    name: "Test2",
    nickname: "T2",
    role: "Designer",
    sex: "1",
    sex2: ["0", "1"],
    num1: 20,
    age: 22,
    address: "Guangzhou",
    date12: "",
    date13: "2020-08-20",
    attr3: "",
    attr4: "",
  },
  {
    id: 10003,
    name: "Test3",
    nickname: "T3",
    role: "Test",
    sex: "0",
    sex2: ["1"],
    num1: 200,
    age: 32,
    address: "Shanghai",
    date12: "2020-09-10",
    date13: "",
    attr3: "2",
    attr4: "",
  },
  {
    id: 10004,
    name: "Test4",
    nickname: "T4",
    role: "Designer",
    sex: "1",
    sex2: ["1"],
    num1: 30,
    age: 23,
    address: "Shenzhen",
    date12: "",
    date13: "2020-12-04",
    attr3: "",
    attr4: "",
  },
]);
const ptypeList = ref([
  { label: "项目1", value: "1" },
  { label: "项目2", value: "2" },
  { label: "项目3", value: "3" },
]);
const pnameList = ref([]);
const cachePnameList = ref([]);
const formatProjectType = (row) => {
  const item = ptypeList.value.find((item) => item.value === row.attr3);
  return item ? item.label : row.attr3;
};

function save() {
  const $table = tableRef.value;
  if ($table) {
    const { updateRecords } = $table.getRecordset();
    console.log(updateRecords);
  }
}

// 更新级联选项列表
const updatePnameList = (row) => {
  const ptype = row.attr3;
  let pList = [];
  if (ptype) {
    const item = cachePnameList.value.find((item) => item.ptype === ptype);
    if (item) {
      pList = item.pnameList;
    } else {
      // 模拟后台数据
      Array.from(new Array(XEUtils.random(3, 8))).forEach((item, index) => {
        pList.push({
          label: `${ptype}-名称${index}`,
          value: `${ptype}_${index}`,
        });
      });
      cachePnameList.value.push({ ptype, pnameList: pList });
    }
  }
  pnameList.value = pList;
};
const ptypeChangeEvent = (row) => {
  // 类型切换时更新级联的下拉数据
  row.attr4 = "";
  updatePnameList(row);
};
const editActivatedEvent = ({ row }) => {
  console.log(111);
  updatePnameList(row);
};
</script>
