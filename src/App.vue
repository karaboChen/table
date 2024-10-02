<template>
  <div class="container">
    <div
      v-for="(list, index) in 5"
      :key="index"
      class="header"
      :ref="(el) => (CardsRef[index] = el)"
    >
      <div class="box" :class="{ shrink: shrinkIndexes.includes(index) }">
        <p>老司機</p>
        <p :class="{ see: shrinkIndexes.includes(index) }">996</p>
      </div>
      <ol>
        <li v-for="i in 10" :key="i">asddewf</li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useScrollListener } from "@/compasble/desroll";
const CardsRef = ref([]);
const shrinkIndexes = ref([]);
const windowHeight = window.innerHeight;
const handleScroll = () => {
  shrinkIndexes.value = [];
  CardsRef.value.forEach((el, index) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const isTopmost = rect.top <= 0 && rect.bottom > 0;
    const isFullyVisible = rect.top > 0 && rect.bottom <= windowHeight;
    if (isTopmost && !isFullyVisible) {
      shrinkIndexes.value.push(index);
    }
  });
  if (shrinkIndexes.value.length > 0) {
    return;
  }
};
const debouncedScrollHandler = useScrollListener(handleScroll, 800);

onMounted(() => {
  window.addEventListener("scroll", debouncedScrollHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", debouncedScrollHandler);
});
</script>

<style lang="scss" scoped>
.see {
  display: none;
}

.box {
  background-color: green;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  height: 60px; // 原始高度
  transition: height 0.8s ease;
}

.shrink {
  height: 30px; // 原始高度

  p {
    transform: translateY(-13px);
  }
}
</style>
