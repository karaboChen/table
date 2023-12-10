<script setup>
const greetingMessage = 'hello'
</script>


<template>
  <button class="cc">
    <slot name ="A"  >A</slot>
    <slot name ="B">B</slot>
  	<slot :text="greetingMessage" :count="1"></slot>
    <slot :ww="'zzz'" :aa="500" name="header"></slot>
    <!-- <slot>確定</slot> -->
  </button>
</template>

<style scoped>
.cc{
  width: 700px;
}
</style>

