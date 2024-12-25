<script setup>
import { ref } from "vue";
const props = defineProps({
  ArrayList: {
    type: Array,
    require: true,
  },
});
</script>

<template>
  <ul class="nav-links">
    <template v-for="kk in props.ArrayList">
      <!-- 多 -->
      <li v-if="kk.children === 'true'">
        <div class="icon-link">
          <i class="bx bx-collection icon"></i>
          <span class="link_name">{{ kk.title }}</span>
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <ul class="sub-menu">
          <h4 class="blank">{{ kk.title }}</h4>
          <li v-for="k in kk.group.items">
            <a href="#" class="link_name">{{ k.title }}</a>
          </li>
        </ul>
      </li>
      <!-- 單一 -->
      <li v-else>
        <div class="icon-link">
          <a href="#">
            <i class="bx bx-grid-alt icon"></i>
            <span class="link_name">{{ kk.title }}</span>
          </a>
        </div>
        <!-- 提示的   blank 代表關閉狀態 -->
        <ul class="sub-menu blank">
          <li>
            <a href="#" class="link_name">{{ kk.title }}</a>
          </li>
        </ul>
      </li>
    </template>
    <!-- 個人資訊 -->
    <!-- <li>
      <div class="profile-details">
        <div class="profile-content">
          <img src="@/assets/cat.jpg" alt="#" />
        </div>
        <div class="name-job">
          <div class="profile_name">Lisa</div>
          <div class="job">Web Designer</div>
        </div>
        <i class="bx bx-log-out"></i>
      </div>
    </li> -->
  </ul>
</template>

<style lang="scss" scoped>
.icon-link:hover {
  background-color: rgba(75, 90, 206, 0.3);
}

.nav-links {
  height: 100%;
  // padding: 30px 0 150px 0;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    position: relative;
    transition: all 0.4s ease;
  }

  .icon-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .icon {
      height: 50px;
      min-width: 75px;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      transform: all 0.3s ease;
    }
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      .link_name {
        font-size: 16px;
        font-weight: 400;
        transition: all 0.4s ease;
      }
    }
  }

  .blank {
    display: none;
  }

  .sub-menu {
    list-style: none;
    padding: 4px 6px 14px 33px;
    margin-top: -10px;
    font-size: 16px;
    line-height: 1.3;
    // background-color: #1d1b31;
    // display: none;
    li {
      padding: 5px 0px;
    }
    .link_name {
      text-decoration: none;
    }
  }
}
</style>
