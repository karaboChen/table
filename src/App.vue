<script setup>
import { ref, onMounted, reactive } from "vue";
import Ham from "@/components/header.vue";
import Menu from "@/components/Menu.vue";
import "boxicons";
const temp = ref([
  {
    title: "組織架構",
    path: "/phone",
    component: "AppLayout",
    children: "false",
    icon: "bxl-typescript",
  },
  {
    title: "資訊管理",
    path: "/mis",
    component: "AppLayout",
    children: "true",
    icon: "bx-cheese",
    group: {
      title: "MIS_manage",
      items: [
        {
          index: "MIS_manage",
          title: "電腦設備管理",
          path: "mis_cem",
          component: "Mis_cemView",
        },
        {
          index: "MIS_manage",
          title: "電腦設備管理-查詢",
          path: "mis_cem_query",
          component: "Mis_cemqView",
        },
        {
          index: "MIS_manage",
          title: "共用槽",
          path: "mis_files",
          component: "Mis_filesView",
        },
      ],
    },
  },
]);
const foo = ref(false);
const WindowData = reactive({
  screenWidth: 0,
  sidebar: "",
});

WindowData.screenWidth = document.body.clientWidth;
changeWidth(WindowData.screenWidth);
function resize() {
  let resizeTimeout;
  window.onresize = () => {
    clearTimeout(resizeTimeout); // 清除先前的計時器
    resizeTimeout = setTimeout(() => {
      WindowData.screenWidth = document.body.clientWidth;
      changeWidth(WindowData.screenWidth);
    }, 300); // 延遲 300 毫秒（可根據需求調整）
  };
}

function changeWidth(clientWidth) {
  // 主要根据 窗口变化 到一定位置时，变换样式
  if (clientWidth >= 1200) {
    // el-menu-vertical-demo el-menu-demo
    WindowData.sidebar = "sidebar";
  } else {
    WindowData.sidebar = "close";
  }
}

onMounted(() => {
  resize();
});

function IsToggle() {
  foo.value = !foo.value;
}
</script>

<template>
  <div :class="[WindowData.sidebar, { close: foo }]">
    <!-- 頭部 -->
    <div class="logo-details" @click="IsToggle">
      <i class="bx bx-menu bx-md"></i>
      <div class="img">
        <img src="@/assets/Logo.png" alt="" />
      </div>
    </div>
    <!-- 路由 -->
    <Menu :ArrayList="temp" :class="{ close: foo }"/>
    <!-- 個人資訊 -->
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.sidebar {
  width: 180px;
  height: 100vh;
  background-color: rgba(75, 90, 206, 0.3);
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;

  .logo-details {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    i {
      font-size: 30px;
      height: 50px;
      min-width: 75px;
      text-align: center;
      line-height: 50px;
    }

    i:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 24px;
    }
  }

  .img {
    width: 85px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.close {
  width: 75px;
  height: 100vh;
  background-color: rgba(75, 90, 206, 0.3);
  transition: all 0.3s ease;
  overflow-x: hidden;
  &::-webkit-scrollbar {
      display: none;
    }
}
</style>
