// export const resize = (chart) => {
//   let timer = 0;
//   window.addEventListener("resize", () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       console.log(999);
//       chart.resize();
//     }, 300);
//   });
// };
import { ref, onMounted, onUnmounted } from 'vue'
export function useMouse(chart) {
  // 被组合式函数封装和管理的状态
  
  // 组合式函数可以随时更改其状态。
   function update(){
    chart.resize();
   }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => window.addEventListener("resize", update));
  onUnmounted(() => window.removeEventListener("resize", update));

}
