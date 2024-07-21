<script setup>
import { ref, computed } from "vue";
const val2 = ref("");
const val3 = ref("");

const formData = ref({
  email: "",
});
const formRef = ref();
const changeEvent = (params) => {
  const $form = formRef.value;
  if ($form) {
    $form.updateStatus(params);
  }
};

const submitEvent = () => {
  formData.value.email=formData.value.email +val3.value
  console.log(formData.value);
  // VxeUI.modal.message({ content: '保存成功', status: 'success' })
};
</script>

<template>
  <vxe-form
    title-colon
    title-width="100"
    title-align="right"
    :data="formData"
    ref="formRef"
    @submit="submitEvent"
  >
    <vxe-form-item title="Email" field="email" span="24">
      <template #default="params">
        <vxe-input
          v-model="formData.email"
          placeholder="自定义后缀模板"
          style="width: 300px"
          @change="changeEvent(params)"
        >
          <template #suffix>
            <vxe-select
              v-model="val3"
              placeholder="默认尺寸"
              size="mini"
              clearable
            >
              <vxe-option
                v-for="num in 15"
                :key="num"
                :value="num"
                :label="`选项${num}`"
              ></vxe-option>
            </vxe-select>
          </template>
        </vxe-input>
      </template>
    </vxe-form-item>
    <vxe-form-item align="center" span="24">
      <template #default>
        <vxe-button type="submit" status="primary">提交</vxe-button>
        <vxe-button type="reset">重置</vxe-button>
      </template>
    </vxe-form-item>
  </vxe-form>
</template>
