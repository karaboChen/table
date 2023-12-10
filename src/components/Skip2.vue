<script setup>

</script>

<template>
  <div class="container">
    <div class="text text-background">Loading . . .</div>
    <div class="text text-color">Loading . . .</div>
  </div>
</template>

<style lang="scss" >
.text {
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 5px;
}

.text-background {
  color: White;
  text-shadow: 0 0 6px #DDA0DD;
}

.container {
  position: relative;
}

.text-color {
  white-space: nowrap;
  color: MediumOrchid;
  position: absolute;
  left: 0;
  top: 0;
  animation: widthChange 3s infinite;
  overflow: hidden;
}

@keyframes widthChange {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}
</style>