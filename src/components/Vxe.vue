<script setup>
import { ref, onMounted } from "vue";
import { Get_test } from "@/backend/api";
import { VxeUI } from "vxe-pc-ui";
const formRef = ref();
const formData = ref({
  name: "",
});

let timer = null;

const formRules = ref({
  name: [
    { required: true, message: "請輸入姓名" },
    {
      validator: ({ itemValue }) => {
        return new Promise((resolve, reject) => {
          clearTimeout(timer);
          timer = setTimeout(async () => {
            try {
              let res = await Get_test({ name: itemValue });
              if (res.data.status === true) {
                reject(new Error(`被誰佔用:${res.data.name}`));
              } else {
                resolve();
              }
            } catch (error) {
              reject(error);
            }
          }, 1000);
        });
      },
    },
  ],
});

onMounted(async () => {
  // let res = await Get_test({ name: "陳柄坊" });
  // console.log(res.data);
  VxeUI.modal.message({
    id: 'myUniqueMsg',
    content: '很遺憾，這工號已經被建立過了^^',
    status: 'warning'
  })
});

const changeEvent = (params) => {
  const $form = formRef.value;
  if ($form) {
    $form.updateStatus(params);
  }
};
const submitEvent = () => {
  VxeUI.modal.message({ content: "保存成功", status: "success" });
};
const resetEvent = () => {
  VxeUI.modal.message({ content: "重置事件", status: "info" });
};
</script>

<template>
  <div>
    <vxe-form
      ref="formRef"
      :data="formData"
      :rules="formRules"
      @submit="submitEvent"
      @reset="resetEvent"
    >
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default="params">
          <vxe-input
            v-model="formData.name"
            @change="changeEvent(params)"
          ></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24" :item-render="{}">
        <template #default>
          <vxe-button
            type="submit"
            status="primary"
            content="提交"
          ></vxe-button>
          <vxe-button type="reset" content="重置"></vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>
