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
      <li v-if="kk.children === 'true'" class="default">
        <div class="icon-link">
          <a href="#" >
            <i class="bx bx-collection icon"></i>
            <span class="link_name">{{ kk.title }}</span>
          </a>
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <ul class="sub-menu">
          <h4>{{ kk.title }}</h4>
          <li v-for="k in kk.group.items">
            <a href="#" class="link_name">{{ k.title }}</a>
          </li>
        </ul>
      </li>
      <!-- 單一 -->
      <!-- <li v-else class="default">
        <a href="#">
          <i class="bx bx-grid-alt"></i>
          <span class="link_name">{{ kk.title }}</span>
        </a>
        提示的   blank 代表關閉狀態
        <ul class="sub-menu blank">
          <li>
            <a href="#" class="link_name">{{ kk.title }}</a>
          </li>
        </ul>
      </li> -->
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
    .icon {
      height: 50px;
      min-width: 75px;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      cursor: pointer;
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
}
</style>
