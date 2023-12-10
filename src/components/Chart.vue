<script setup>
import { onMounted, ref, getCurrentInstance } from 'vue'
import { useMouse } from '../util/resize'
const chart = ref(null)
let myChart = null
const { proxy } = getCurrentInstance()
onMounted(() => {
  myChart = proxy.$echarts.init(chart.value)
  init(myChart)
  show(myChart)
})



function Operation() {
  return new Promise((resolve) => {
    // 模拟异步操作，这里使用 setTimeout 来模拟异步行为
    setTimeout(() => {
      resolve()
    }, 3000)
  });
}





let tt = ref(false)

let option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}


async function show(chart) {
  let option2 = null

  if (tt.value === true) {
    option2 = {
      title: {
        text: '123'
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260150, 230, 224, 218, 135, 147, 260150, 230, 224, 218, 135, 147, 260150, 230, 224, 218, 135, 147, 260150, 230, 224, 218, 135, 147, 260150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    }
  } else {
    option2 = {
      title: {
        text: '空的'
      },
      graphic: [
        {
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: "No data available"
          }
        }
      ],
    }
  }
  chart.setOption(option2, true)
}


function init(chart) {
  chart.setOption(option)
}


</script>


<template>
  <div ref="chart" class="d"></div>
</template>

<style  scoped>
.d {
  width: 100%;
  height: 500px;
}
</style>