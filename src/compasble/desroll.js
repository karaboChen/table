import { ref } from 'vue';

export function useScrollListener(callback, delay = 3000) {
  const timer = ref(null);

  const handleScroll = () => {
    if (timer.value) {
      clearTimeout(timer.value);
    }
    timer.value = setTimeout(() => {
      callback();
    }, delay);
  };

  return handleScroll;
}