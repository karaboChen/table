import { ref,readonly } from 'vue'

export function useSetName(){
  const name = ref('Jay')
  function setName(data){
    name.value = data
  }
// 指定name為readonly的寫法
  return{
    name:readonly(name),
    setName
  }
}