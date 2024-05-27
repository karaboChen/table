<script setup>

const model = defineModel()

function update() {
  model.value++
}
</script>


<template>
  <div>父组件绑定v-model为: {{ model }}</div>
</template>