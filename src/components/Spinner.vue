<script setup>

</script>
<template>
  <div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<style lang="scss" >
.container {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 120px;
  .item:nth-child(5) { opacity: 0; }
  .item {
    width: 32%;
    height: 0;
    padding-top: 31%;
    margin-bottom: 3%;
    background-color: SandyBrown;
    animation: scaleItem 1s infinite ;
  }

  @keyframes scaleItem {
    0%, 100% {
      transform: scale(.1);
    }
    30%, 70% { 
      transform: scale(1);
    }
  }

  .item:nth-child(2) { animation-delay: .2s; }
  .item:nth-child(3) { animation-delay: .3s; }
  .item:nth-child(4) { animation-delay: .8s; }
  .item:nth-child(6) { animation-delay: .4s; }
  .item:nth-child(7) { animation-delay: .7s; }
  .item:nth-child(8) { animation-delay: .6s; }
  .item:nth-child(9) { animation-delay: .5s; }
// }

// @keyframes show {
//    to{
//     opacity: 0;
//    }
 }


</style>
