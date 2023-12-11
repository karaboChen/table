<script setup>
import { ref } from 'vue'

const size = ref('small')
const value1 = ref(new Date())
const form = ref('')
const form2 = ref('')
const input = ref('')
</script>

<template>
  <div class="box">
    <div class="header">
      <h2>泵浦訓練數據</h2>
      <h2>歷史紀錄</h2>
    </div>
    <main>
      <!-- 左邊 -->
      <ol class="left_ol">
        <li>上次訓練日期: <br /> 2023/11/10 05:33:23 到 2023/12/10 05:33:23</li>
        <li>上次修改人員:林冠明</li>
        <div>
          <el-button type="danger">修改</el-button>
          <el-button type="warning">取消</el-button>
        </div>
      </ol>
      <!-- 右邊 -->
      <ol class="right_ol">
        <li>
          <el-date-picker style="width: 41%;" v-model="value1" type="date" placeholder="起始" :size="size" />
          <el-date-picker style="width: 41%;" v-model="value1" type="date" placeholder="結束" :size="size" />
        </li>
        <li>
          <el-form-item label="選擇修改人員">
            <el-select v-model="form" placeholder="選擇修改人員">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </li>
        <li>
          <el-form-item label="選擇泵浦">
            <el-select v-model="form2" placeholder="選擇泵浦" style="transform: translateX(32px);">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </li>
        <li>
          <el-input style="width: 60%;" v-model="input" type="password" placeholder="輸入密碼" show-password />
        </li>
      </ol>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@mixin cardStyles {
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07);
  margin: 0 auto;
  width: 50%;
}

.box {
  box-sizing: border-box;
  overflow: hidden;
}

.header {
  margin-top: 30px;
  @include cardStyles;
  display: flex;
  justify-content: space-between;

  h2:nth-child(2) {
    background: greenyellow;
  }

}

main {
  @include cardStyles;
  margin-top: 5px;
  display: flex;
  justify-content: space-evenly;

  .left_ol {
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
      display: flex;
      justify-content: space-between;
    }
  }

  .right_ol {
    list-style: none;
   
    li:nth-child(1) {
      display: flex;
      column-gap: 10px;
    }

    li:nth-child(2) {
      height: 30px;
    }

    li:nth-child(2),
    li:nth-child(3) {
      margin-top: 5px;
      display: flex;
    }
  }
}
</style>

