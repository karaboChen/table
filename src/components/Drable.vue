<script setup>
import { ref, onMounted, nextTick, computed } from "vue";
import Sortable, { MultiDrag } from "sortablejs";

const tableData = ref([
  {
    id: 1,
    name: "Test1",
    role: "Develop",
    sex: "Man",
  },
  {
    id: 2,
    name: "Test2",
    role: "Test",
    sex: "Women",
  },
  {
    id: 3,
    name: "Test3",
    role: "PM",
    sex: "Man",
  },
  {
    id: 4,
    name: "Test4",
    role: "Designer",
    sex: "Women",
  },
  {
    id: 99,
    name: "Test44",
    role: "Designer",
    sex: "Women",
  },
]);
let temp_tableData = JSON.parse(JSON.stringify(tableData.value));
const table = ref();
let sortable = null;
const multiple = ref([]);

onMounted(() => {
  Sortable.mount(new MultiDrag());
  sortable = Sortable.create(
    table.value.$el.querySelector(".body--wrapper>.vxe-table--body tbody"),
    {
      animation: 150,
      multiDrag: true,
      forceFallback: false,
      selectedClass: "selected",
      onEnd: ({ newIndex, oldIndex }) => {
        if (newIndex !== oldIndex) {
          console.log("o", oldIndex);
          console.log("n", newIndex);
          // let be = tableData.value.splice(oldIndex, 1)[0];
          // tableData.value.splice(newIndex, 0, be);
        }
      },
      onStart: function (/**Event*/ evt) {
        console.log();
        evt.oldIndex; // element index within parent
      },

      onSelect: function ({ newIndicies }) {
        multiple.value = [];
        for (let i = 0; i < newIndicies.length; i++) {
          multiple.value.push(newIndicies[i].index);
        }
        // console.log(multiple.value);
      },
      onDeselect: function (/**Event*/ evt) {
        evt.item; // The deselected item
        // console.log(123);
      },
    }
  );
});

// function open() {
//    let temp_tableData = JSON.parse(JSON.stringify(tableData.value));

//   let state = sortable.option("disabled"); // get
//   sortable.option("disabled", !state); // set
//   if (title.value === "儲存") {
//     temp_tableData = check();
//     console.log(temp_tableData.value)
//   }

//   title.value = title.value === "調整位置" ? "儲存" : "調整位置";
// }

//拖曳回傳陣列
function check() {
  return temp_tableData.reduce((acc, data, index) => {
    if (
      index < tableData.value.length &&
      data.id !== tableData.value[index].id
    ) {
      acc.push({
        id: data.id,
        name: tableData.value[index]?.name || null,
        // uu_id: tableData.value[index]?.name || null,
      });
    }
    return acc;
  }, []);
}

const uniqueNames = computed(() => [
  ...new Set(tableData.value.map((item) => item.name)),
]);
const uniqueRoles = computed(() => [
  ...new Set(tableData.value.map((item) => item.role)),
]);
const uniqueSexes = computed(() => [
  ...new Set(tableData.value.map((item) => item.sex)),
]);

const val1 = ref(""); //姓名
const val2 = ref(""); //角色
const val3 = ref(""); //性別

const filteredData = ref([]);
function search() {
  filteredData.value = tableData.value.filter((item) => {
    const nameMatch = !val1.value || item.name === val1.value;
    const roleMatch = !val2.value || item.role === val2.value;

    const sexMatch = !val3.value || item.sex === val3.value;

    return nameMatch && roleMatch && sexMatch;
  });
}
</script>

<template>
  <div>
    <vxe-select v-model="val1" placeholder="姓名" clearable>
      <vxe-option
        v-for="num in uniqueNames"
        :key="num"
        :value="num"
        :label="`${num}`"
      ></vxe-option>
    </vxe-select>
    <vxe-select v-model="val2" placeholder="角色" clearable>
      <vxe-option
        v-for="num in uniqueRoles"
        :key="num"
        :value="num"
        :label="`${num}`"
      ></vxe-option>
    </vxe-select>
    <vxe-select v-model="val3" placeholder="性別" clearable>
      <vxe-option
        v-for="num in uniqueSexes"
        :key="num"
        :value="num"
        :label="`${num}`"
      ></vxe-option>
    </vxe-select>
    <button @click="search">搜尋</button>
    <vxe-table :data="tableData" ref="table" height="300">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
    </vxe-table>
  </div>
</template>

<style>
.selected {
  background-color: #f9c7c8 !important;
  border: solid red 1px !important;
  z-index: 1 !important;
}
</style>
