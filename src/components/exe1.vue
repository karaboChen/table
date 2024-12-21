<script setup></script>

<template>
  <div class="body">
    <nav>
      <ul>
        <!-- logo -->
        <li>
          <div class="logo">
            <span class="drawer-toggle-label"></span>
            <img src="./assets/Logo.png" alt="#" />
          </div>
        </li>
        <li>
          <a href="#">
            <el-icon class="icon"><IEpCirclePlus /></el-icon>
            <span class="nav-item">回首頁</span>
          </a>
        </li>
        <li>
          <a href="#">
            <el-icon class="icon"><IEpCirclePlus /></el-icon>
            <span class="nav-item">第一比</span>
          </a>
        </li>
        <li>
          <a href="#">
            <el-icon class="icon"><IEpCirclePlus /></el-icon>
            <span class="nav-item">第二比</span>
          </a>
        </li>
        <li>
          <a href="#">
            <el-icon class="icon"><IEpCirclePlus /></el-icon>
            <span class="nav-item">第三比</span>
          </a>
        </li>
        <li>
          <a href="#" class="logout">
            <el-icon class="icon"><IEpCirclePlus /></el-icon>
            <span class="nav-item">第四比</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
body {
  background-color: rgba(43, 180, 61, 0.2);
}
.body {
  height: 100vh;
}

a {
  display: table;
  width: 300px;
  padding: 10px;
}
.el-icon {
  text-align: center;
  top: 14px;
  font-size: 20px;
  position: relative;
  width: 70px;
  height: 40px;
}
nav {
  width: 90px;
  background-color: azure;
  overflow: hidden;
  height: 100%;
  transition: width 0.2 linear;
  box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.2);
}
.nav-item {
  position: relative;
  top: 14px;
  margin-left: 59px;
}

a:hover {
  background-color: #eee;
}
nav:hover {
  width: 300px;
  transition: all 0.5s ease;
}

.logo {
  text-align: center;
  display: flex;
  transition: all 0.5s ease;
}

.logo img {
  width: 123px;
  height: 56px;
}
.logout {
  /* position: absolute;
  bottom: 0; */
}

.drawer-toggle-label {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  left: 12px;
  top: 13px;
  height: 40px;
  width: 40px;
  display: block;
  position: fixed;
  background: rgba(255, 255, 255, 0);
  z-index: 1;
}

.drawer-toggle-label:before {
  content: "";
  display: block;
  position: absolute;
  height: 2px;
  width: 20px;
  background: #8d8d8d;
  left: 10px;
  top: 13px;
  box-shadow: 0 6px 0 #8d8d8d, 0 12px 0 #8d8d8d;
}

.drawer-toggle-label:hover {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  cursor: pointer;
}
</style>
