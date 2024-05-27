<script setup >
import {sd,ww} from '@/compasble/comm'
const aa = sd()

function vv(a,b) {
  aa.name(a,b)
}


</script>


<template>
 <div>
   {{aa.vv}}
 </div>
 <button @click="vv(3,4)">--</button>
 <button @click="ww++">+xxxx+</button>
 <div>
   {{ww}}
 </div>
</template>


<style lang="scss" scoped>

</style>