
<script  setup>
import { reactive, ref } from 'vue'

const formRef = ref(null)

const numberValidateForm = reactive({
  age: '',
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

const rules = [
  { required: true, message: '年齡必填123' },
  { type: 'number', message: '只接受數字' },
]
</script>


<template>
  <el-form ref="formRef" :model="numberValidateForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="age" prop="age" :rules="rules">
      <el-input v-model.number="numberValidateForm.age" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
      <el-button @click="resetForm(formRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>


<style lang="scss">

</style>
