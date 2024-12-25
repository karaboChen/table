<script setup>
import { reactive } from "vue";

const IsShow = reactive({
  click: false,
  collapse: false,
});

const IsToggle = () => {
  if (IsShow.collapse) return;
  IsShow.click = !IsShow.click;
};
const IsCollapse = () => {
  IsShow.collapse = !IsShow.collapse;
};
</script>

<template>
  <aside class="open" :class="{ close: IsShow.collapse }">
    <div class="IsToggle" @click="IsCollapse">
      <el-icon v-show="IsShow.collapse"><IEpFold /></el-icon>
      <el-icon v-show="!IsShow.collapse"><IEpExpand /></el-icon>
    </div>
    <li>
      <!-- 外面 -->
      <div class="open_title" @click="IsToggle">
        <el-icon><IEpAim /></el-icon>
        <span>ERP查詢</span>
        <el-icon class="arrow" :class="{ is_rotate: IsShow.click }"
          ><IEpArrowDown
        /></el-icon>
      </div>
      <!-- 內容 -->
      <ul class="open_txt" :class="{ is_open: IsShow.click }">
        <li>
          <a href="#">養殖月報-重量</a>
        </li>
        <li>
          <a href="#">養殖月報-金額</a>
        </li>
      </ul>
    </li>
  </aside>
</template>

<style lang="scss" scoped>
$padding-left: 14px;
$width: 24px;
$color: #4a4a4a;
$color-white: #f8f5f5;
$hover-color: #080808;
.open {
  width: 160px;
  list-style: none;
  height: 100dvh;
  background-color: #dbf2bb;
  color: $color;
  transition: width 0.3s ease;
  .IsToggle {
    padding-left: $padding-left;
    cursor: pointer;
    .el-icon {
      font-size: 30px;
    }
  }

  &_title {
    transform: scale(1, 1);
    opacity: 1;
    transition: 0.3s ease-out 0.3s;
    position: relative;
    font-size: 18px;
    display: flex;
    align-items: center;
    padding-left: $padding-left;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
  }
  &_title:hover {
    color: $hover-color;
  }

  &_txt {
    padding-left: $padding-left * 2;
    opacity: 0;
    transform: scale(1, 0);
    transform-origin: top;
    a {
      text-decoration: none;
      color: #4a4a4a;
      font-size: 16px;
      height: 30px;
      line-height: 30px;
    }
    li:hover a {
      padding: 10px 8px;
      border-radius: 5px;
      background-color: $hover-color;
      color: $color-white;
    }
  }

  .el-icon {
    vertical-align: middle;
    margin-right: 5px;
    width: $width;
    text-align: center;
    font-size: 18px;
  }

  .arrow {
    position: absolute;
    top: 0;
    right: 5%;
    margin-top: 7px;
    transition: transform 0.3s;
  }
  // 展開選單的
  .is_open {
    transform: scale(1, 1);
    opacity: 1;
    transition: 0.2s ease-out 0.15s;
  }
}

.is_rotate {
  transform: rotateZ(180deg);
}

.close {
  width: 50px;
  overflow: hidden;
  .open_title {
    > :not(:first-child) {
      width: 0;
      overflow: hidden;
    }
  }
  .open_txt {
    width: 0;
    overflow: hidden;
  }
}
</style>
