<script setup>
import { onMounted, ref, getCurrentInstance } from 'vue'
const chart = ref(null)
let myChart = null
const chart2 = ref(null)
let myChart2 = null
const { proxy } = getCurrentInstance()


let tt = 0
onMounted(() => {
  myChart = proxy.$echarts.init(chart.value)
  myChart2 = proxy.$echarts.init(chart2.value)
  init(myChart)
  show(myChart)
  init(myChart2)
  show(myChart2)

  myChart.on('click', function (params) {
    let dataIndex = params.dataIndex
    tt = params.dataIndex
    let option2 = {
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'axis'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          markLine: {
            data: [{ xAxis: dataIndex }]
          }
        }
      ]
    }
    myChart.setOption(option2, true)
  });
})



function handleKeyDown(e) {
  if (e.key === 'ArrowRight') {
    tt = tt + 1
    let option2 = {
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'axis'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          markLine: {
            data: [{ xAxis: tt }]
          }
        }
      ]
    }
    myChart.setOption(option2)
  }

  if (e.key === 'ArrowRight') {
    let option = {
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'axis'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          markLine: {
            data: [{ xAxis: tt }]
          }
        }
      ]
    }
    myChart2.setOption(option)
  }

}
function handleKeyDown2(e) {
  console.log(123)
  console.log(e)
}

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
  let option2 = {
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'axis'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
  chart.setOption(option2, true)
}



function init(chart) {
  chart.setOption(option)
  chart.setOption(option)
}



</script>


<template>
  <div ref="chart" class="d" @keydown="handleKeyDown" tabindex="-1"></div>
  <div ref="chart2" class="d" @keydown="handleKeyDown2" tabindex="-1"></div>
</template>

<style  scoped>
.d {
  width: 100%;
  height: 500px;
}
</style>