<script setup>
import { ref } from "vue";
const isDropdownOpen = ref(false);

function showDropdown() {
  isDropdownOpen.value = true;
}

function hideDropdown() {
  isDropdownOpen.value = false;
}
</script>

<template>
  <div
    class="dropdown"
    v-on:mouseover="showDropdown"
    v-on:mouseleave="hideDropdown"
  >
    <button>下拉菜单</button>
    <div class="dropdown-content" :class="{ show: isDropdownOpen }">
      <a href="#">选项1</a>
      <a href="#">选项2</a>
      <a href="#">选项3</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.show {
  display: block;
}

.dropdown-content {
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(-20px);
}
.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
