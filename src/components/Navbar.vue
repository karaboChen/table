<script setup>
import { ref, computed } from "vue";
const isShow = ref(false);

function FnBtn() {
  isShow.value = !isShow.value;
}
</script>

<template>
  <button @click="FnBtn" class="btn">++</button>
  <div class="nav" :class="{ active: isShow }">
    <ul>
      <li>
        <span class="icon"><i class="fa-solid fa-house"></i></span>
        <span class="title">登入雞腿</span>
        <!-- <a href="#">
          <span class="icon"><i class="fa-solid fa-house"></i></span>
          <span class="title">登入雞腿</span>
        </a> -->
      </li>

      <!-- <li>
        <a href="#">
          <span class="icon"><i class="fa-solid fa-house"></i></span>
          <span class="title">登入雞腿</span>
        </a>
      </li> -->
    </ul>
  </div>
</template>

<style lang="scss">
@import "./assets/reset.scss";

.btn {
  position: fixed;
  right: 0;
  top: 0;
}

.nav {
  position: fixed;
  width: 200px;
  height: 100%;
  background: #ff7700;
  overflow: hidden;
  transition: width 0.5s ease-in-out;
}

.active {
  width: 60px;
}

ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

li {
  display: flex;
  text-decoration: none;
  color: #000000;
}

.title {
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
  text-align: start;
  white-space: nowrap;
}
.icon {
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

li:hover {
  background-color: cadetblue;
}
</style>
