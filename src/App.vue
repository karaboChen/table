<template>
  <div>
    <vxe-table
      border
      :edit-config="{ mode: 'row', trigger: 'click' }"
      :data="tableData"
    >
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column
        field="enable_user"
        title="下拉框多选"
        width="200"
        :edit-render="{ autofocus: '.vxe-input--inner' }"
      >
        <template #edit="{ row }">
          <vxe-select
            v-model.trim="row.enable_user"
            type="text"
            :options="temp_list"
            transfer
            multiple
            filterable
            @change="selectV(row)"
          >
            <template #header>
              <vxe-checkbox v-model="row.is_check" @change="toggleAll(row)"
                >全選</vxe-checkbox
              >
            </template>
          </vxe-select>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const temp_list = [
  { label: "100-aaa", value: "100-aaa" },
  { label: "101-aab", value: "101-aab" },
];

const tableData = ref([
  {
    id: 10001,
    enable_user: [],
    is_check: false,
  },
  {
    id: 10002,
    enable_user: [],
    is_check: false,
  },
]);

const toggleAll = (row) => {
  if (row.is_check === true) {
    row.enable_user = temp_list.map((item) => item.value);
  } else {
    row.enable_user = [];
  }
};

const selectV = (row) => {
  if (row.enable_user.length === temp_list.length) {
    row.is_check = true;
  } else {
    row.is_check = false;
  }
};
</script>
