<script setup>

</script>

<template>
  <div class="sidebar close">
    <!-- 頂部 -->
    <div class="logo-details">
      <i class="bx bxl-typescript"></i>
      <span class="logo_name"> CodingLab </span>
    </div>
    <!-- 路由 -->
    <ul class="nav-links">
      <li>
        <!-- 單一情況 -->
        <a href="#">
          <i class="bx bxs-shield-plus"></i>
          <span class="link_name">Dashboard</span>
        </a>
        
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Dashboard </a></li>
        </ul>
      </li>

      <li>
        <!-- 父 -->
        <div class="icon-link">
          <a href="#">
            <i class="bx bxs-baby-carriage"></i>
            <span class="link_name">Category</span>
          </a>
          <i class="bx bx-chevron-down arrow"></i>
        </div>
        <!-- 子 -->
        <ul class="sub-menu">
          <li><a class="link_name">Category</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Card Design</a></li>
          <li><a href="#">Login Form</a></li>
        </ul>
      </li>
      <li>
        <div class="icon-link">
          <a href="#">
            <i class="bx bx-book-content"></i>
            <span class="link_name">Book</span>
          </a>
          <i class="bx bx-chevron-down arrow"></i>
        </div>
      </li>
    </ul>
    <div class="profile-details">
      <div class="profile-content">
        <img src="./assets/111.png" alt="#" />
      </div>
      <li></li>
      <div>
        <div class="name-job">
          <div class="profile_name">陳柄坊</div>
          <div class="job">在線人數</div>
        </div>
        <i class="bx bx-log-out"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/reset.scss";

* {
  box-sizing: border-box;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  width: 260px;
  height: 100%;

  .logo-details {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;

    i {
      font-size: 30px;
      color: white;

      height: 50px;
      line-height: 50px;
      text-align: center;
      min-width: 78px;
    }

    .logo_name {
      font-size: 22px;
      color: white;
      font-weight: 600;
    }
  }
}

.nav-links {
  height: 100%;
  padding-top: 30px;

  li {
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
  }

  li:hover {
    background-color: #1d1b31;
  }

  li a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  li i {
    height: 50px;
    line-height: 50px;
    text-align: center;
    min-width: 78px;
    color: white;
    font-size: 20px;
  }

  .link_name {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
  }
  .icon-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.sub-menu {
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  background-color: #1d1b31;
  // display: none;

  .link_name {
    display: none;
  }
}

.sub-menu a {
  color: white;
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}

.sub-menu a:hover {
  opacity: 1;
}

.close .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  transition: all 0.4s ease;
  opacity: 0;
  pointer-events: none;
}

.close li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
}

.close .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}

.profile-details {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .profile_name,
  .job {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }

  .job {
    font-size: 12px;
  }
}

.profile-content img {
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
  background-color: #1d1b31;
  padding: 10px;
}
</style>
