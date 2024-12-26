<script setup>
import { ref } from "vue";
const open = ref(false);
const move = () => {
  open.value = !open.value;
};
</script>

<template>
  <aside class="sidebar" :class="{ open: open }">
    <div class="burger" @click="move">
      <el-icon><IEpExpand /></el-icon>
    </div>

    <div class="header">
      <img src="/src/assets/cat.jpg" alt="" />
      <h1>Anna</h1>
    </div>

    <nav>
      <div>
        <a href="#">
          <el-icon><IEpTickets /></el-icon>
          <p>Search</p>
        </a>
        <a href="#">
          <el-icon><IEpTickets /></el-icon>
          <p>Search</p>
        </a>
        <a href="#">
          <el-icon><IEpTickets /></el-icon>
          <p>Search</p>
        </a>
      </div>

      <p class="line"></p>

      <div>
        <a href="#">
          <el-icon><IEpVan /></el-icon>
          <p>Search</p>
        </a>
        <a href="#">
          <el-icon><IEpCpu /></el-icon>
          <p>logout</p>
        </a>
      </div>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.el-icon {
  color: white;
  font-size: 30px;
}
p {
  color: white;
}
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: #07011b;
  width: 100px;
  transition: width 0.4s;
  height: 100vh;
  nav {
    padding: 0 8px;
    margin-top: 1em;
    display: flex;
    height: 82vh;
    justify-content: space-evenly;
    flex-direction: column;
  }
  a {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 6px;
    font-size: 22px;
    padding: 18px 32px;
    opacity: 0.75;
    cursor: pointer;
    p {
      position: absolute;
      top: 40%;
      left: 70px;
      margin: 0%;
      margin-left: 25px;
      font-size: 18px;
      transition: 0.175s;
      white-space: nowrap;
      opacity: 0;
    }
  }
  a:hover {
    background-color: #ff00ba;
    opacity: 1;
  }
}
.sidebar.open {
  width: 300px;
  .header {
    h1 {
      opacity: 1;
    }
  }
  a p {
    opacity: 1;
  }
}
.burger {
  align-items: center;
  padding: 15px 32px;
  cursor: pointer;
}
.header {
  display: flex;
  align-items: center;
  position: relative;
  top: 1%;
  left: 20px;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
  h1 {
    margin-left: 20px;
    color: white;
    text-align: center;
    opacity: 0; // Hide the name
    transition: opacity 0.3s;
    font-size: 40px;
  }
}

.line {
  width: 100%;
  height: 2px;
  background-color: white;
  padding: 0 2%;
  opacity: 0.75;
}
</style>
