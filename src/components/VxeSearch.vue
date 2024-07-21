<template>
  <div>
    <p>
      <vxe-input
        v-model="msg"
        type="search"
        placeholder="名字、地區"
      ></vxe-input>
    </p>
    <vxe-table
      border
      height="300"
      :column-config="{ useKey: true }"
      :row-config="{ useKey: true }"
      :data="list2"
      :loading="load"
      :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
      show-overflow
      @edit-closed="ttt"
      keep-source
    >
      <vxe-column
        field="name"
        title="Name"
        :edit-render="{ name: 'input' }"
      ></vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{ name: 'input' }">
      </vxe-column>
      <vxe-column field="age" title="Age" type="html"> </vxe-column>
      <vxe-column field="address" title="Address" type="html"> </vxe-column>
      <template #empty>
        <span style="color: red">
          <img
            src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif"
          />
          <p>没有更多数据了！</p>
        </span>
      </template>
    </vxe-table>
    <vxe-pager
      v-model:currentPage="pageVO.currentPage"
      v-model:pageSize="pageVO.pageSize"
      :total="pageVO.total"
      @page-change="pageChange"
    >
    </vxe-pager>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from "vue";
const tableData = ref([
  {
    id: 10001,
    name: "Test1",
    role: "Develop",
    sex: "0",
    age: 28,
    amount: 888,
    address: "test abc",
  },
  {
    id: 10002,
    name: "Test2",
    role: "Test",
    sex: "1",
    age: 22,
    amount: 666,
    address: "Guangzhou",
  },
  {
    id: 10003,
    name: "Test3",
    role: "PM",
    sex: "1",
    age: 32,
    amount: 89,
    address: "Shanghai",
  },
  {
    id: 10004,
    name: "Test4",
    role: "Designer",
    sex: "0",
    age: 23,
    amount: 1000,
    address: "test abc",
  },
  {
    id: 10005,
    name: "Test5",
    role: "Develop",
    sex: "0",
    age: 30,
    amount: 999,
    address: "Shanghai",
  },
  {
    id: 10006,
    name: "Test6",
    role: "Designer",
    sex: "0",
    age: 21,
    amount: 998,
    address: "test abc",
  },
  {
    id: 10007,
    name: "Test7",
    role: "Test",
    sex: "1",
    age: 29,
    amount: 2000,
    address: "test abc",
  },
  {
    id: 10008,
    name: "Test8",
    role: "Develop",
    sex: "1",
    age: 35,
    amount: 999,
    address: "test abc",
  },
  {
    id: 10009,
    name: "Test9",
    role: "Test",
    sex: "1",
    age: 26,
    amount: 2000,
    address: "test abc",
  },
  {
    id: 100010,
    name: "Test10",
    role: "Develop",
    sex: "1",
    age: 21,
    amount: 666,
    address: "test abc",
  },
  {
    id: 10001,
    name: "Test11",
    role: "Develop",
    sex: "0",
    age: 28,
    amount: 888,
    address: "test abc",
  },
  {
    id: 10002,
    name: "Test12",
    role: "Test",
    sex: "1",
    age: 22,
    amount: 666,
    address: "Guangzhou",
  },
  {
    id: 10003,
    name: "Test13",
    role: "PM",
    sex: "1",
    age: 32,
    amount: 89,
    address: "Shanghai",
  },
  {
    id: 10004,
    name: "Test14",
    role: "Designer",
    sex: "0",
    age: 23,
    amount: 1000,
    address: "test abc",
  },
  {
    id: 10005,
    name: "Test15",
    role: "Develop",
    sex: "0",
    age: 30,
    amount: 999,
    address: "Shanghai",
  },
  {
    id: 10006,
    name: "Test16",
    role: "Designer",
    sex: "0",
    age: 21,
    amount: 998,
    address: "test abc",
  },
  {
    id: 10007,
    name: "Test17",
    role: "Test",
    sex: "1",
    age: 29,
    amount: 2000,
    address: "test abc",
  },
  {
    id: 10008,
    name: "Test18",
    role: "Develop",
    sex: "1",
    age: 35,
    amount: 999,
    address: "test abc",
  },
  {
    id: 10009,
    name: "Test19",
    role: "Test",
    sex: "1",
    age: 26,
    amount: 2000,
    address: "test abc",
  },
  {
    id: 100010,
    name: "Test20",
    role: "Develop",
    sex: "1",
    age: 21,
    amount: 666,
    address: "test abc",
  },
]);
import debouce from "@/compasble/debouce";

let { msg } = debouce("", 800);

const load = ref(false);

const pageVO = reactive({
  total: 0,
  currentPage: 1,
  pageSize: 10,
});

const list2 = computed({
  get() {
    const { pageSize, currentPage } = pageVO;
    let filteredData = tableData.value;

    if (msg.value.trim() !== "") {
      const filterVal = msg.value.trim().toLowerCase();
      const searchProps = ["name", "role", "age", "address"];

      filteredData = tableData.value
        .filter((item) =>
          searchProps.some((key) =>
            String(item[key]).toLowerCase().includes(filterVal)
          )
        )
        .map((item) => {
          const newItem = { ...item };
          searchProps.forEach((key) => {
            newItem[key] = String(newItem[key]).replace(
              new RegExp(filterVal, "gi"),
              (match) => `<span class="keyword-lighten">${match}</span>`
            );
          });
          return newItem;
        });
    }

    pageVO.total = filteredData.length;
    return filteredData.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
  },
  set(val) {},
});

const handlePageData = () => {
  load.value = true;
  const { pageSize, currentPage } = pageVO;
  pageVO.total = tableData.value.length;
  list2.value = tableData.value.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  load.value = false;
};
const pageChange = ({ pageSize, currentPage }) => {
  pageVO.currentPage = currentPage;
  pageVO.pageSize = pageSize;
  handlePageData();
};

onMounted(() => {
  handlePageData();
});

const vv = ref([]);

function ttt({ row, rowIndex, column }) {
  let temp = {
    title_name: column.field,
    prop: rowIndex,
    value: row[column.field],
  };

  vv.value.push(temp);
}

function save() {
  let filtered = vv.value.reduce((acc, current) => {
    const key = `${current.title_name}_${current.prop}`;
    if (!acc[key]) {
      acc[key] = current;
    }
    return acc;
  }, {});

  let result = Object.values(filtered);
  //api部分  result 傳遞給後端參數
}
</script>
