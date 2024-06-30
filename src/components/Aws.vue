<script setup>
import { onMounted, reactive } from "vue";

//傳一組情況
//const modelValue = defineModel({ type: String, default: 'MUKI space' })


const value = defineModel("value");
const apple = defineModel("apple");


// const childCounterValue = defineModel('couterValue', {
//     type: Number,
//     default: 100
//   })
//   const childStringValue = defineModel('stringValue', {
//     type: String,
//     default: 'MUKI space'
//   })

const props = reactive({});
onMounted(() => {
  props.name = value.value.name;
  props.age = value.value.age;
});

function update() {
  value.value.age++;
}
</script>

<template>
  <div>父组件绑定v-model为: {{ value.age }}</div>
  <button @click="update">++</button>
  <h1>{{apple}}</h1>
</template>
