<script setup>
import { ref, watch } from "vue";
const tableData = ref([{ id: 10001, name: ["1", "2"] }]);

const option = ref([
  { value: "1", label: "选项1" },
  { value: "2", label: "选项2" },
  { value: "3", label: "选项3" },
  { value: "4", label: "选项4" },
  { value: "5", label: "选项5" },
  { value: "6", label: "选项6" },
  { value: "7", label: "选项7" },
  { value: "8", label: "选项8" },
]);

const temp = ref(null);
function ww({ value }) {
  temp.value = value.includes("0");
}

const selectedValues = ref([]);

function handleChange({ value }) {
  if (value.includes("all")) {
    selectedValues.value = option.value.map((option) => option.value);
  } else {
    selectedValues.value = value;
  }
}
</script>

<template>
  <vxe-table
    border
    show-overflow
    :data="tableData"
    :column-config="{ resizable: true }"
    :edit-config="{ trigger: 'click', mode: 'cell' }"
  >
    <vxe-column type="seq" width="60"></vxe-column>
    <vxe-column
      field="name"
      title="Name"
      :edit-render="{ autofocus: '.vxe-input--inner', name: 'MyInput' }"
    >
      <template #edit="{ row }">
        <vxe-select
          v-model="selectedValues"
          placeholder="多选"
          clearable
          multiple
          transfer
          @change="handleChange"
        >
          <vxe-option :key="'all'" :value="'all'" label="全选" />
          <vxe-option
            v-for="e in option"
            :key="e.value"
            :value="e.value"
            :label="e.label"
          />
        </vxe-select>
      </template>
    </vxe-column>
  </vxe-table>
</template>

<style lang="scss" scoped></style>
