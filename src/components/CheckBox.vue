<script setup></script>

<template>
  <div>
    <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
    <label for="drawer-toggle" id="drawer-toggle-label"></label>
    <nav id="drawer">
      <ul>
        <li><a href="#">Menu Item</a></li>
        <li><a href="#">Menu Item</a></li>
        <li><a href="#">Menu Item</a></li>
        <li><a href="#">Menu Item</a></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
#drawer-toggle-label {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  left: 0px;
  height: 50px;
  width: 50px;
  display: block;
  position: fixed;
  background: rgba(255, 255, 255, 0);
  z-index: 1;
}

#drawer {
  position: fixed;
  top: 0;
  left: -300px;
  height: 100%;
  width: 300px;
  background: #2f2f2f;
  // overflow-x: hidden;
  // overflow-y: scroll;
  // padding: 20px;
  // -webkit-overflow-scrolling: touch;
}

/* adds our "hamburger" menu icon */

#drawer-toggle-label:before {
  content: "";
  display: block;
  position: absolute;
  height: 2px;
  width: 24px;
  background: #8d8d8d;
  left: 13px;
  top: 18px;
  box-shadow: 0 6px 0 #8d8d8d, 0 12px 0 #8d8d8d;
}

#drawer-toggle:checked ~ #drawer-toggle-label {
  left: 300px;
}

#drawer-toggle:checked ~ #drawer { 
left: 0px; 
} 

#drawer-toggle:checked ~ #drawer-toggle-label { 
    height: 100%; 
    width: calc(100% - 300px); 
    background: rgba(207, 26, 26, 0.8); 
}


</style>
