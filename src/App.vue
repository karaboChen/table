<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="card">
    <!-- 頭部 -->
    <div class="header">
      <!-- 姓名 -->
      <p class="name">0660-陳炳芳-工程師-在職 XX-XXX-XXX-XXX</p>
      <div class="label">
        <p>代理人</p>
        <ol>
          <li>0660-陳炳芳</li>
          <li>0660-陳炳芳</li>
          <li>0660-陳炳芳</li>
        </ol>
        <button class="btn">++</button>
      </div>
    </div>
    <!-- 中間 工作職掌 -->
    <main class="main">
      <p>工作職掌</p>
      <ol>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>f</li>
        <li>g</li>
        <li>h</li>
        <li>i</li>
      </ol>
      <button class="btn">++</button>
    </main>
    <!-- 底部 -->
    <footer class="footer">
      <div class="label">
        <p>預計產出</p>
        <ol>
          <li class="product">0660-陳炳芳</li>
          <li class="product">0660-陳炳芳</li>
          <li class="product">0660-陳炳芳</li>
        </ol>
        <button class="btn">++</button>
      </div>
      <div class="label path">
        <p>資料夾路徑</p>
        <ol>
          <li>0660-陳炳芳</li>
          <li>0660-陳炳芳</li>
          <li>0660-陳炳芳</li>
          <li>0660-陳炳芳</li>
        </ol>
        <button class="btn">++</button>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.card {
  max-width: 533px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.header {
  .name {
    border: 1px solid black;
    display: table-cell;
    vertical-align: middle;
    padding: 0 5px;
    font-size: 18px;
    background: linear-gradient(135deg, #ccc 25%, transparent 25%) -50px 0,
      linear-gradient(225deg, #eee 25%, transparent 25%) -50px 0,
      linear-gradient(315deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, #eee 25%, transparent 25%);
  }

  .label {
    position: relative;
    display: table-cell;
    text-align: center;
    border: 1px solid black;
    p {
      margin: auto;
      border-bottom: 1px solid black;
      font-style: italic;
      font-size: 18px;
      background: radial-gradient(circle, #64dbe2, #2139d6);
    }

    li {
      font-size: 18px;
      padding: 2px 10px;
      text-decoration: underline;
    }
  }
}
.btn {
  position: absolute;
  top: 0;
  right: 0;
}

.main {
  position: relative;
  border: 1px solid black;
  background-image: repeating-linear-gradient(
    165deg,
    #ccc,
    #7cac3a 60px,
    #dbdbdb 60px,
    #cad279 120px
  );

  li {
    font-size: 18px;
  }

  p {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
  }
}

.footer {
  display: flex;
  .label {
    position: relative;
    flex: 1;
    border: 1px solid black;
  }
  p {
    text-align: center;
    margin: auto;
    border-bottom: 1px solid black;
    font-size: 18px;
    font-style: italic;
  }
}
</style>
