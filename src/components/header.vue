<script setup>

</script>

<template>

</template>

<style lang="scss" scoped>
.logo-details {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
}
.bx-menu:hover {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 24px;
}

.img {
  width: 78px;
  height: 56px;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
  }
}

.close {
  all: unset; 
  .img {
    display: none;
  }
}


</style>
