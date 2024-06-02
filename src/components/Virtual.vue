<template>
  <vxe-table
    border
    header-align="center"
    align="center"
    show-overflow
    keep-source
    height="400"
    :column-config="{ resizable: true, useKey: true }"
    :row-config="{ useKey: true }"
    :edit-config="{
      trigger: 'click',
      mode: 'cell',
      showStatus: true,
      showIcon: false,
    }"
    :custom-config="{ immediate: true }"
    :scroll-y="{ enabled: true, gt: 0 }"
    style="font-size: 18px"
    :data="tableData"
    ref="tableRef"
    show-footer
    :footer-method="footerMethod"
  >
    <vxe-column
      v-for="(vv, index) in tableColumns"
      :key="vv.prop"
      :field="vv.prop"
      :title="vv.title_name"
      :visible="vv.show"
      :edit-render="{ autofocus: '.vxe-input--inner' }"
      :filters="roleOptions"
      :filter-method="filterRoleMethod"
    >
      <template #edit="{ row, column }">
        <vxe-input v-model="tableData[row.qq][column.field]" type="text" />
      </template>
      <template #default="{ row, column }">
        {{ tableData[row.qq][column.field] }}
      </template>
    </vxe-column>
  </vxe-table>
</template>

<script setup>
import { ref, nextTick, computed } from "vue";
const tableRef = ref();
const toolbarRef = ref();
const tableColumns = ref([]);
const tableData = ref([]);

const roleOptions = ref([{ data: "" }]);

const countAllAmount = (data) => {
  let count = 0;
  data.forEach((row) => {
    count += countAmount(row);
  });
  return count;
};



const countAmount = (row) => {
  return row[tableColumns.value[3].prop];
};



const footerMethod = ({ columns, data }) => {
  return [
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return "合计";
      }
      if (columnIndex === 3) {
        return `${countAllAmount(data)}`;
      }
      return "-";
    }),
  ];
};
const filterRoleMethod = ({ column, value, row }) => {
  return row[column.field] === value;
};

setTimeout(() => {
  let temp = [
    {
      qq: 0,
      id: 10001,
      name: "Test1",
      role: "Develop",
      sex: "Man",
      age: 28,
      address: "test abc",
    },
    {
      qq: 1,
      id: 10002,
      name: "Test1",
      role: "Test",
      sex: "Women",
      age: 22,
      address: "Guangzhou",
    },
    {
      qq: 2,
      id: 10003,
      name: "Test3",
      role: "PM",
      sex: "Man",
      age: 32,
      address: "Shanghai",
    },
    {
      qq: 3,
      id: 10004,
      name: "Test4",
      role: "Designer",
      sex: "Women",
      age: 23,
      address: "test abc",
    },
  ];

  let temp2 = [
    { prop: "name", title_name: "Name" },
    { prop: "role", title_name: "Role" },
    { prop: "sex", title_name: "Sex" },
    { prop: "age", title_name: "Age" },
    { prop: "address", title_name: "Address" },
  ];

  let temp3 = [
    { label: "Man", value: "Man" },
    { label: "John", value: "John" },
  ];

  tableColumns.value = temp2;
  tableData.value = temp;
  nextTick(() => {
    tableRef.value.setFilter("sex", temp3);
  });
  
}, 1000);


</script>
